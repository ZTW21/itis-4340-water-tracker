import { addLog } from '../model/WaterModel';

// adds a new water intake log
export const addWaterIntake = (amount) => {
  const timestamp = new Date().toLocaleTimeString(); // gets the current time
  const logEntry = { amount, timestamp }; // creates a new log entry
  addLog(logEntry); // adds the log entry to the model
  return logEntry; // returns the new log entry
};
