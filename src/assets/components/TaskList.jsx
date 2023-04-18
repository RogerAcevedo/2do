import React from 'react'

// COMPONENT IMPORTS
import TaskItem from './TaskItem'

// STYLES
import styles from './TaskList.module.css'

const TaskList = ({tasks, deleteTask, toggleTask, enterEditMode}) => {
  return (
   <ul className={styles.tasks}>
    {
        // parenthesis after => because we are immediately returning
        tasks.sort((a, b) => b.id - a.id).map(task => (
            <TaskItem
                key={task.id}
                task={task}
                deleteTask={deleteTask}
                toggleTask={toggleTask}
                enterEditMode={enterEditMode}
            />
        ))
    }

   </ul>
  )
}

export default TaskList