import React, { useContext, useState } from 'react';
import { TaskContext } from '../context/TaskContext';
import TaskItem from './TaskItem';
import TaskForm from './TaskForm';
import './TaskList.css';

const TaskList = () => {
  const { tasks } = useContext(TaskContext);
  const [filter, setFilter] = useState('All');
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const filteredTasks = tasks.filter(task =>
    filter === 'All' ? true : filter === 'Done' ? task.done : task.priority === filter
  );

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="task-list-container">
      <div className={darkMode ? 'app dark-mode' : 'app'}>
        <button className="dark-mode-toggle" onClick={toggleDarkMode}>
          {darkMode ? 'Light Mode' : 'Dark Mode'}
        </button>
        <div className="task-list-header">
          <h1>Task List View</h1>
          <button className="add-task-button" onClick={openModal}>+ Add New Task</button>
        </div>
        <div className="filter-buttons">
          {['All', 'High', 'Medium', 'Low', 'Done'].map(f => (
            <button key={f} onClick={() => setFilter(f)} className={filter === f ? 'active' : ''}>{f}</button>
          ))}
        </div>
        <div className="task-items">
          {filteredTasks.map(task => (
            <TaskItem key={task.id} task={task} />
          ))}
        </div>
        {isModalOpen && <TaskForm onClose={closeModal} />}
      </div>
    </div>
  );
};

export default TaskList;
