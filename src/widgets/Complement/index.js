import React from 'react';
import PropTypes from 'prop-types';

import Sequence from 'ui/Sequence';

const Complement = ({ sequence }) => {
  return (
    <div className="Complement">
      <h3>Complement</h3>

      {sequence.size() === 0
        ? <p>sequence is empty</p>
        : <Sequence sequence={sequence.complement().sequence()} />}
    </div>
  );
};

Complement.propTypes = {
  sequence: PropTypes.shape({
    complement: PropTypes.func.isRequired,
  }).isRequired,
};

export default Complement;
