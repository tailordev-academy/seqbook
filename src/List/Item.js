/* @flow */
import React from 'react';

type Props = {|
  title: string,
  onSelect: Function,
|};

const Item = ({ title, onSelect }: Props) => (
  <button onClick={onSelect} className="list-group-item">
    {title}
  </button>
);

export default Item;
