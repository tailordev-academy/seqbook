import React from 'react';
import PropTypes from 'prop-types';

const Item = ({ title }) => (
  <li className="list-group-item">{title}</li>
);

Item.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Item;
