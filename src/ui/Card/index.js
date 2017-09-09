/* @flow */
import React from 'react';

import './styles.css';

type Props = {|
  title: string,
  value: string | number,
  unit?: string,
|};

const Card = (props: Props) => (
  <div className="Card panel panel-default">
    <div className="Card-title panel-heading">
      <span className="panel-title">{props.title}</span>
    </div>
    <div className="Card-value panel-body">
      {props.value}
      {props.unit || ''}
    </div>
  </div>
);

export default Card;
