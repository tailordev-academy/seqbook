/* @flow */
import React from 'react';

import Sequence from 'ui/Sequence';
import type { NtSeq } from 'types';

type Props = {
  sequence: NtSeq,
};

const Complement = ({ sequence }: Props) => {
  return (
    <div className="Complement">
      <h3>Complement</h3>

      {sequence.size() === 0 ? (
        <p>sequence is empty</p>
      ) : (
        <Sequence sequence={sequence.complement().sequence()} />
      )}
    </div>
  );
};

export default Complement;
