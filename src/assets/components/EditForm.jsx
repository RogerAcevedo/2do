import React from 'react'
import { useState, useEffect } from 'react';

// IMPORT ICONS FROM HERO ICONS
import { CheckIcon } from '@heroicons/react/24/outline';

// {addTask} is passing props from App.js
const EditForm = ({editedTask, updateTask, closeEditMode}) => {
    //USE STATE
    const [updatedTaskName, setUpdatedTaskName] = useState(editedTask.name);

    //USE EFFECT
    useEffect(() => {

        const closeWindow = (e) => {
            e.key === 'Escape' && closeEditMode()
        }

        window.addEventListener('keydown', closeWindow )

        return () => {
            window.removeEventListener('keydown', closeWindow)
        }

    }, [closeEditMode])

const handleFormSubmit = (e) => {
    e.preventDefault();
    updateTask({...editedTask, name: updatedTaskName})
}

  return (

    <div role='dialog' 
        aria-labelledby='editTask' 
        onClick={(e) => {
            e.target === e.currentTarget && closeEditMode();
        }}    
    >
        <form
        className='todo'
        onSubmit={handleFormSubmit}
        action="">
            <div className="wrapper">
                <input
                type="text"
                id='EditTask'
                className='input'
                value={updatedTaskName}
                onInput={(e) => setUpdatedTaskName(e.target.value)}
                required
                autoFocus
                maxLength={60}
                placeholder='Update Task'
                />
                <label
                htmlFor="LabelTask"
                className='label'
                >
                Update Task</label>
            </div>
            <button
            className='btn'
            type='submit'
            aria-label={` Confirm edited task to: ${updatedTaskName}`}
            >
                < CheckIcon strokeWidth={2} height={24} width={24} />
            </button>
        </form>
    </div>

  )
}

export default EditForm