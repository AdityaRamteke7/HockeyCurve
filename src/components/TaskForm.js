import React, { useState, useContext } from 'react';
import { TaskContext } from '../context/TaskContext';
import './TaskForm.css';

const TaskForm = ({ task = {}, onClose }) => {
    const { addTask, editTask, markAsDone } = useContext(TaskContext);
    const [name, setName] = useState(task.name || '');
    const [description, setDescription] = useState(task.description || '');
    const [dueDate, setDueDate] = useState(task.dueDate || '');
    const [priority, setPriority] = useState(task.priority || 'Medium');

    const handleSubmit = (e) => {
        e.preventDefault();
        const updatedTask = { ...task, name, description, dueDate, priority };
        task.id ? editTask(updatedTask) : addTask(updatedTask);
        onClose();
    };

    return (
        <div className="task-form-overlay">
            <div className="task-form">
                <form onSubmit={handleSubmit}>
                    <label>Task Name</label>
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />

                    <label>Description</label>
                    <textarea
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        required
                    />

                    <label>Due Date</label>
                    <input
                        type="date"
                        value={dueDate}
                        onChange={(e) => setDueDate(e.target.value)}
                        required
                    />

                    <label>Priority</label>
                    <select
                        value={priority}
                        onChange={(e) => setPriority(e.target.value)}
                        required
                    >
                        <option value="High">High</option>
                        <option value="Medium">Medium</option>
                        <option value="Low">Low</option>
                    </select>

                    <div className="task-form-buttons">
                        <button onClick={() => markAsDone(task.id)}>
                            {task.done ? 'Undo' : 'Mark as Done'}
                        </button>
                        <button type="submit">Save Task</button>
                        <button type="button" onClick={onClose}>Cancel</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default TaskForm;
