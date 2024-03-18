import React from 'react';

// Displays a single water intake log
function WaterLog({ log }) {
  // Convert the AWS timestamp to a Date object
  const date = new Date(log.timestamp);

  // Use toLocaleString for initial formatting
  const options = {
    month: 'numeric', day: 'numeric', year: '2-digit',
    hour: '2-digit', minute: '2-digit', hour12: true
  };
  let formattedDate = date.toLocaleString('en-US', options);

  // Remove leading zero from hours less than 10
  formattedDate = formattedDate.replace(/(\s)0(\d:\d{2}\s\w{2})/, "$1$2");

  // Renders the amount of water and the adjusted timestamp of intake
  return <div>{`${log.amount} fl oz at ${formattedDate}`}</div>;
}

export default WaterLog;
