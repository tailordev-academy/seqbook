import React from 'react';
import PropTypes from 'prop-types';

import Item from './Item';

const List = ({ sequences }) => {
  if (sequences.length === 0) {
    return <p>no sequences</p>;
  }

  return (
    <div className="list-group">
      {sequences.map(sequence =>
        <Item
          key={sequence.id}
          title={sequence.name}
        />
      )}
    </div>
  );
};

List.propTypes = {
  sequences: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
    sequence: PropTypes.string,
  })).isRequired,
};

export default List;
