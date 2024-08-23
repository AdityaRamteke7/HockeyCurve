import React, { createContext, useState } from 'react';

const TaskContext = createContext();

const TaskProvider = ({ children }) => {
    const [tasks, setTasks] = useState([
        { id: 1, name: 'Task 1', description: 'Lorem Ipsum has been the industry\'s standard dummy text.', priority: 'High', dueDate: '2024-08-17 ', done: false },
        { id: 2, name: 'Task 2', description: 'Lorem Ipsum has been the industry\'s standard dummy text.', priority: 'High', dueDate: '2024-07-25', done: false },
        { id: 3, name: 'Task 3', description: 'Lorem Ipsum has been the industry\'s standard dummy text.', priority: 'Medium', dueDate: '2024-08-01', done: false },
        { id: 4, name: 'Task 4', description: 'Lorem Ipsum has been the industry\'s standard dummy text.', priority: 'Low', dueDate: '2024-08-12', done: false }
    ]);

    const addTask = (task) => setTasks([...tasks, task]);
    const editTask = (updatedTask) => setTasks(tasks.map(task => task.id === updatedTask.id ? updatedTask : task));
    const deleteTask = (id) => setTasks(tasks.filter(task => task.id !== id));
    const markAsDone = (id) => setTasks(tasks.map(task => task.id === id ? { ...task, done: true } : task));

    return (
        <TaskContext.Provider value={{ tasks, addTask, editTask, deleteTask, markAsDone }}>
            {children}
        </TaskContext.Provider>
    );
};

export { TaskContext, TaskProvider };
