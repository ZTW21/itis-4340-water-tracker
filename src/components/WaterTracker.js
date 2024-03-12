import React, { useState } from 'react';
import WaterLog from './WaterLog';
import WaterBottleProgress from './WaterBottleProgress'; // Import the WaterBottleProgress component
import { addWaterIntake } from '../controller/WaterController';

function WaterTracker() {
  const [logs, setLogs] = useState([]); // State to hold water intake logs
  const [goal, setGoal] = useState(124); // State for the daily water intake goal, defaulting to 124 fl oz
  const [customAmount, setCustomAmount] = useState(''); // State to hold the custom water amount

  // Function to handle adding a new water intake log
  const handleAddWater = (amount) => {
    const newLog = addWaterIntake(amount);
    setLogs([...logs, newLog]);
  };

  // Function to reset the water intake logs
  const handleReset = () => {
    setLogs([]);
  };

  // Function to update the daily water intake goal
  const handleGoalChange = (e) => {
    setGoal(e.target.value);
  };

  const handleAddCustomAmount = () => {
    const amount = parseFloat(customAmount);
    if (!isNaN(amount) && amount > 0) {
      handleAddWater(amount);
      setCustomAmount('');
    }
  };

  // Calculate the total water intake by summing up the amounts from each log
  const totalIntake = logs.reduce((total, log) => total + log.amount, 0);

  // Calculate the progress towards the goal as a percentage
  const progressPercentage = (totalIntake / goal) * 100;

  return (
    <div className="p-4 flex justify-between">
      {/* Main content area */}
      <div className="space-y-4">
        <h1 className="text-2xl font-bold mb-4">Water Tracker</h1>
        {/* Input field to set or change the daily water intake goal */}
        <div className="mb-4">
          <label htmlFor="goalInput" className="block text-sm font-medium text-gray-700">
            Daily goal (fl oz)
          </label>
        </div>
        <input
          id="goalInput"
          type="number"
          value={goal}
          onChange={handleGoalChange}
          step="8"
          className="input bg-white border border-gray-300 rounded mb-8 py-2 px-4 block shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
          placeholder="Set your daily goal (fl oz)"
        />
        {/* Buttons for adding common US water bottle sizes in fluid ounces */}
        <div className="flex items-start space-x-2">
          <button className="btn bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={() => handleAddWater(8)}>Add 8 fl oz</button>
          <button className="btn bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={() => handleAddWater(16.9)}>Add 16.9 fl oz</button>
          <button className="btn bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={() => handleAddWater(32)}>Add 32 fl oz</button>

          <div className="flex flex-col space-y-2">
            <input
              type="number"
              value={customAmount}
              onChange={(e) => setCustomAmount(e.target.value)}
              className="input bg-white border border-gray-300 rounded py-2 px-4 block shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50 w-24"
              placeholder="fl oz"
            />
            <button className="btn bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded" onClick={handleAddCustomAmount}>Add</button>
          </div>
          

          <button className="btn bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded" onClick={handleReset}>Reset</button>
        </div>
        {/* Display total water intake */}
        <h2 className="font-semibold mb-4">Total Intake: {totalIntake.toFixed(1)} fl oz</h2>
        {/* Renders each log entry */}
        {logs.map((log, index) => (
          <WaterLog key={index} log={log} />
        ))}
      </div>
      {/* Water bottle progress visual */}
      <div className="absolute top-[300px] right-0">
        <WaterBottleProgress progressPercentage={progressPercentage} />
      </div>
    </div>
  );
}

export default WaterTracker;
