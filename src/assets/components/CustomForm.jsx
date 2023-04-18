import React from 'react'
import { useState } from 'react';

// IMPORT ICONS FROM HERO ICONS
import { PlusIcon } from '@heroicons/react/24/solid'

// {addTask} is passing props from App.js
const CustomForm = ({addTask}) => {
    const [task, setTask] = useState('');

const handleFormSubmit = (e) => {
    e.preventDefault();
    addTask({
        name: task,
        checked: false,
        id: Date.now()
    })
    setTask('')
}



  return (
    <form 
    className='todo' 
    onSubmit={handleFormSubmit}
    action="">
        <div className="wrapper">
            <input 
            type="text" 
            id='task'
            className='input'
            value={task}
            onInput={(e) => setTask(e.target.value)}
            required
            autoFocus
            maxLength={60}
            placeholder='New Task'
            />
            <label 
            htmlFor="task"
            className='label'
            > 
            New Task</label>
        </div>

        <button 
        className='btn'
        type='submit'
        aria-label='New Task'
        >
            < PlusIcon/>
        </button>
    </form>
  )
}

export default CustomForm