import React, { useContext, useState } from 'react';
import { TaskContext } from '../context/TaskContext';
import TaskForm from './TaskForm';
import './TaskItem.css';

const TaskItem = ({ task }) => {
    const { deleteTask } = useContext(TaskContext);
    const [expanded, setExpanded] = useState(false);
    const [isEditing, setIsEditing] = useState(false);

    const handleEdit = () => setIsEditing(true);
    const closeEditForm = () => setIsEditing(false);

    return (
        <div className={`task-item ${expanded ? 'expanded' : ''}`}>
            <div className="task-header" onClick={() => setExpanded(!expanded)}>
                <div> <h3>{task.name}</h3>
                    <span>{task.dueDate}</span></div>

                <div className={`priority ${task.priority.toLowerCase()}`}>
                    <div className='task-priority'>
                        <span>{task.priority}</span>
                    </div>
                </div>
            </div>
            {expanded && (
                <div className="task-details">
                    <p>Description:</p>
                    <p style={{ color: "black", fontWeight: "600" }}>{task.description}</p>
                    <p>Due:</p>
                    <p style={{ color: "black", fontWeight: "600" }}> {task.dueDate}</p>
                    <div className="task-buttons">
                        <button onClick={handleEdit}>Edit</button>
                        <button onClick={() => deleteTask(task.id)}>Delete</button>
                    </div>
                </div>
            )}
            {isEditing && <TaskForm task={task} onClose={closeEditForm} />}
        </div>
    );
};

export default TaskItem;
