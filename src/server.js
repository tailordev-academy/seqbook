import path from 'path';
import fs from 'fs';
import express from 'express';
import React from 'react';
import { renderToString } from 'react-dom/server';
import { Provider } from 'react-redux';
import { StaticRouter } from 'react-router-dom';

import configureStore from 'store/configureStore';
import Seqbook from 'Seqbook';

const app = express();
// This configures the `/static` directory, which is used to load CSS/JS.
app.use(
  `/static`,
  express.static(path.resolve(__dirname, '..', 'build', 'static'))
);

// This is fired every time the server side receives a request.
app.use((req, res) => {
  const indexHtml = path.resolve(__dirname, '..', 'build', 'index.html');

  fs.readFile(indexHtml, 'utf8', (err, template) => {
    const context = {};
    // 1. Create the store.
    const store = configureStore();
    // 2. Render the application using a `StaticRouter`, see:
    // https://reacttraining.com/react-router/web/guides/server-rendering.
    const markup = renderToString(
      <Provider store={store}>
        <StaticRouter location={req.url} context={context}>
          <Seqbook />
        </StaticRouter>
      </Provider>
    );

    if (context.url) {
      // Somewhere a `<Redirect>` was rendered, let's redirect the user then.
      redirect(301, context.url);
    } else {
      // Grab the initial state from our Redux store.
      const preloadedState = store.getState();

      let html;
      // This is useful for debugging purpose.
      if (process.env.DISABLE_SSR === true) {
        // We replace this variable to avoid printing it before the application
        // gets loaded. There is no need to replace the `__PRELOADED_STATE__`
        // because the instruction is valid JavaScript and has no effect.
        html = template.replace('__SSR__', '');
      } else {
        html = template
          .replace('__SSR__', markup)
          .replace(
            '__PRELOADED_STATE__',
            [
              `__PRELOADED_STATE__`,
              `=`,
              JSON.stringify(preloadedState).replace(/</g, '\\u003c'),
            ].join(' ')
          );
      }

      // 3. Send the HTML to the client.
      res.send(html);
    }
  });
});

// Start the server.
app.set('port', process.env.PORT || 3030);
app.listen(app.get('port'), () => {
  console.info(
    '✓ App is running at http://localhost:%d in %s mode',
    app.get('port'),
    app.get('env')
  );
  console.info('  Press CTRL-C to stop\n');
});
