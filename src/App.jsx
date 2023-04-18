import { useState } from 'react'

// COMPONENT IMPORTS
import CustomForm from './assets/components/CustomForm'
import TaskList from './assets/components/TaskList'
import EditForm from './assets/components/EditForm'

// IMPORT HOOKS
import useLocalStorage from './assets/hooks/useLocalStorage'

function App() {

  //STATE
    // LOCAL STORAGE
  const [tasks, setTasks] = useLocalStorage('2do', [])

  const [editedTask, setEditedTask] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [prevFocus, setPrevFocus] = useState(null);

  // NEW TASK
  const addTask = (task) => {
    setTasks(prevState => [...prevState, task])
  }

  // DELETE TASK
  const deleteTask = (id) => {
    setTasks(prevState => prevState.filter(t => t.id !== id))
  }

  //UPDATE CHECK STATUS
  const toggleTask = (id) => {
    setTasks(prevState => prevState.map(t => (t.id === id ? {...t, checked: !t.checked} : t)))
  }

  //UPDATE CHECK STATUS
  // const updateTask = (task) => {
  //   setTasks(prevState => prevState.map(t => (t.id === task.id ? {...t, name: t.name} : t)))
  // closeEditMode();
  // }
  const updateTask = (task) => {
    setTasks(prevState => prevState.map(t => (
      t.id === task.id
        ? { ...t, name: task.name }
        : t
    )))
    closeEditMode();
  }
  
const enterEditMode = (task) => {
  setEditedTask(task);
  setIsEditing(true);
  setPrevFocus(document.activeElement);
  
}

const closeEditMode = () => {
  setIsEditing(false);
  prevFocus.focus();
}

  return (
    <div className="container">
      <header>
        <h1>My Task List</h1>
      </header>
      {
        isEditing && (
          < EditForm 
            editedTask={editedTask}
            updateTask={updateTask}
            closeEditMode={closeEditMode}
          />
        )
      }
      <CustomForm addTask={addTask} />
      {tasks  && (
      < TaskList 
      tasks={tasks} 
      deleteTask={deleteTask}
      toggleTask={toggleTask}
      enterEditMode={enterEditMode}
       />
    )}
    </div>
  )
}

export default App
