import React from 'react';

// displays a single water intake log
function WaterLog({ log }) {
  // renders the amount of water and the timestamp of intake
  return <div>{`${log.amount} fl oz at ${log.timestamp}`}</div>;
}

export default WaterLog;
