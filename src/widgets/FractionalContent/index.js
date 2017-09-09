/* @flow */
import React from 'react';
import { VictoryPie } from 'victory';

import type { NtSeq } from 'types';

type Props = {
  sequence: NtSeq,
};

type Entry = {|
  x: string,
  y: number,
|};

const getLabel = (entry: Entry) => `${entry.x} (${Math.round(entry.y * 100)}%)`;

const FractionalContent = ({ sequence }: Props) => {
  const atgc = sequence.fractionalContentATGC();
  const data = Object.keys(atgc).map(nucleotide => ({
    x: nucleotide,
    y: atgc[nucleotide],
  }));

  return (
    <div className="FractionalContent">
      <h3>Nucleotides ratio</h3>

      <VictoryPie
        height={200}
        data={data}
        colorScale="cool"
        innerRadius={40}
        animate={{ duration: 1000 }}
        labels={getLabel}
      />
    </div>
  );
};

export default FractionalContent;
