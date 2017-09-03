import React from 'react';
import PropTypes from 'prop-types';

import Card from 'ui/Card';

const Length = ({ sequence }) => <Card title="length" value={sequence.length} />;

Length.propTypes = {
  sequence: PropTypes.string.isRequired,
};

export default Length;
