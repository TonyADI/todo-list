import React from 'react';
import './Task.css';

export const Task = ({handleClick, id, info, done}) => {
    const removeTask = () => {
        handleClick(id);
    }

    return (
        <div className='task-container'>
            <div className='task'>
                {info}
            </div>
            <button 
                onClick={removeTask} 
                className='button remove-button'>
                    <i className="fa fa-trash icon"></i>
            </button> 
        </div>
        )
    }
}
