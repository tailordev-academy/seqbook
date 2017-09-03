import React from 'react';
import PropTypes from 'prop-types';

const Item = ({ title, onSelect }) => (
  <button
    onClick={onSelect}
    className="list-group-item"
  >
    {title}
  </button>
);

Item.propTypes = {
  title: PropTypes.string.isRequired,
  onSelect: PropTypes.func.isRequired,
};

export default Item;
