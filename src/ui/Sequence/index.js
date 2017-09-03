import React from 'react';
import PropTypes from 'prop-types';

import './styles.css';

const Sequence = ({ sequence }) =>
  <pre className="Sequence">
    <code>{sequence}</code>
  </pre>;

Sequence.propTypes = {
  sequence: PropTypes.string.isRequired,
};

export default Sequence;
