import React from 'react';
import PropTypes from 'prop-types';

import Sequence from 'ui/Sequence';

class SequenceView extends React.Component {
  static propTypes = {
    sequence: PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
      sequence: PropTypes.string,
    }).isRequired,
  };

  render() {
    const { name, sequence } = this.props.sequence;

    return (
      <div className="SequenceView">
        <h3>{name}</h3>

        <Sequence sequence={sequence} />
      </div>
    );
  }
}

export default SequenceView;
