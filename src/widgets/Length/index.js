/* @flow */
import React from 'react';

import Card from 'ui/Card';

type Props = {|
  dna: string,
|};

const Length = ({ dna }: Props) => <Card title="length" value={dna.length} />;

export default Length;
