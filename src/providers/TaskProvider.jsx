import { createContext, useState, useContext } from "react";
import PropTypes from "prop-types";

const TaskContext = createContext();

const useTask = () => useContext(TaskContext);

const TaskProvider = ({ children }) => {
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState("myTasks");

  return (
    <TaskContext.Provider value={{ tasks, setTasks, filter, setFilter }}>
      {children}
    </TaskContext.Provider>
  );
};

TaskProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export { useTask, TaskProvider };
