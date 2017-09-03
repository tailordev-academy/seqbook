import React from 'react';
import PropTypes from 'prop-types';
import { VictoryPie } from 'victory';

const getLabel = entry => `${entry.x} (${Math.round(entry.y * 100)}%)`;

const FractionalContent = ({ sequence }) => {
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

FractionalContent.propTypes = {
  sequence: PropTypes.shape({
    fractionalContentATGC: PropTypes.func.isRequired,
  }).isRequired,
};

export default FractionalContent;
