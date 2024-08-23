import React, { useState } from 'react';
import { TaskProvider } from './context/TaskContext';
import TaskList from './components/TaskList';
import TaskForm from './components/TaskForm';
import './App.css';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [taskToEdit, setTaskToEdit] = useState(null);

  const openModal = (task = null) => {
    setTaskToEdit(task);
    setIsModalOpen(true);
  };

  const closeModal = () => setIsModalOpen(false);

  return (
    <TaskProvider>
      <div className="app">
        <TaskList openModal={openModal} />
        {isModalOpen && <TaskForm task={taskToEdit} closeModal={closeModal} />}
      </div>
    </TaskProvider>
  );
}

export default App;
