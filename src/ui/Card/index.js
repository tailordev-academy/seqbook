import React from 'react';
import PropTypes from 'prop-types';

import './styles.css';

const Card = props =>
  <div className="Card panel panel-default">
    <div className="Card-title panel-heading">
      <span className="panel-title">
        {props.title}
      </span>
    </div>
    <div className="Card-value panel-body">
      {props.value}
      {props.unit || ''}
    </div>
  </div>;

Card.propTypes = {
  title: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  unit: PropTypes.string,
};

export default Card;
