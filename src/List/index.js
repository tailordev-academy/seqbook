/* @flow */
import React from 'react';

import Item from './Item';
import type { Sequence } from 'reducers/app';

type Props = {|
  sequences: Array<Sequence>,
  onSelectSequence: Function,
|};

const List = ({ sequences, onSelectSequence }: Props) => {
  if (sequences.length === 0) {
    return <p>no sequences</p>;
  }

  return (
    <div className="list-group">
      {sequences.map(sequence =>
        <Item
          key={sequence.id}
          title={sequence.name}
          onSelect={() => onSelectSequence(sequence.id)}
        />
      )}
    </div>
  );
};

export default List;
