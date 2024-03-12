let logs = []; // array to store water intake logs

// adds a new log to the logs array
export const addLog = (log) => {
  logs.push(log);
};

// retrieves all log entries
export const getLogs = () => {
  return logs;
};
