import React from 'react';

// Displays a single water intake log
function WaterLog({ log, onDelete }) {
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

  // Helper function to format the water amount
  const formatAmount = (amount) => {
    // Check if the amount is an integer or a decimal with less than 3 decimal places
    if (Number.isInteger(amount) || !/(.*\.\d{3,})/.test(amount.toString())) {
      return amount; // Return the amount as is
    }
    return amount.toFixed(2); // Round to two decimal places if necessary
  };

  // Handle clicking the delete button
  const handleDeleteClick = () => {
    onDelete(log.id);
  };

  // Renders the amount of water, the adjusted timestamp of intake, and the delete button
  return (
    <div className="flex items-center ">
      <button
        onClick={handleDeleteClick}
        className="text-xs text-white bg-red-500 hover:bg-red-700 font-bold py-1 px-2 mr-4 rounded"
      >
        X
      </button>
      <span>{`${formatAmount(log.amount)} fl oz at ${formattedDate}`}</span>

    </div>
  );
}

export default WaterLog;
