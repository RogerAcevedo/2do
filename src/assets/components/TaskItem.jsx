
import React from 'react'
import { useState } from 'react'

// IMPORT STYLES
import styles from './TaskItem.module.css'

// ICONS IMPORT
import { CheckIcon, TrashIcon, PencilSquareIcon } from '@heroicons/react/24/outline'



const TaskItem = ({task, deleteTask, toggleTask, enterEditMode}) => {

const [isChecked, setIsChecked] = useState(task.checked);

const handleCheckboxChange = (e) => {
    setIsChecked(!isChecked)
    toggleTask(task.id)
}

  return (
    <li className={styles.task}>

        <div className={styles["task-group"]}>
            <input 
                type="checkbox"
                checked={isChecked}
                name={task.name}
                id={task.id}
                className={styles.checkbox}
                onChange={handleCheckboxChange}
            />

            <label 
                htmlFor={task.id}
                className={styles.label}
                
            >
                {task.name}
                <p className={styles.checkmark}>
                    <CheckIcon strokeWidth={2} width={24} height={24} />
                </p>
            </label>
        </div>

        <div className={styles['task-group']}>

            <button
                className='btn'
                aria-label={` Update ${task.name} Task`}
                onClick={() => enterEditMode(task) }
            >
                <PencilSquareIcon  width={20} height={20}  />
            </button>

            <button
                className={` btn ${styles.delete}`}
                aria-label={` Delete ${task.name} Task`}
                onClick={() => deleteTask(task.id)}
            >
                <TrashIcon  width={20} height={20}  />
            </button>

        </div>

    </li>
  )
}

export default TaskItem