import { useEffect, useState } from "react"
import AddTasks from "./components/AddTasks"
import Tasks from "./components/Tasks"
import { v4 } from "uuid";
import Title from "./components/Title";

function App() {

  const [tasks, setTasks] = useState(JSON.parse(localStorage.getItem("Tasks")) || [])

  useEffect(() => {
    localStorage.setItem("Tasks", JSON.stringify(tasks))
  }, [tasks]);

  function onTaskClick(taskId){
    const newTasks = tasks.map(task => {
      if (task.id === taskId){
        return {...task, IsCompleted: !task.IsCompleted}
      }

      return task
      }
    );

    setTasks(newTasks);
  }

  function onDeleteTask(taskId){
    const newTasks = tasks.filter(task => task.id !== taskId);

    setTasks(newTasks);
  }

  function onAddTask(title, description){
    const newTask = {
      id: v4(),
      title,
      description,
      IsCompleted: false
    }

    setTasks([...tasks, newTask])
  }
  
  return (
    <div className="w-screen h-screen bg-slate-500 flex justify-center p-6">
      <div className="w-[500px] space-y-4">
        <Title>Gerenciador de Tarefas</Title>
        <AddTasks onAddTask={onAddTask}/>
        <Tasks tasks={tasks} onTaskClick={onTaskClick} onDeleteTask={onDeleteTask}/>
      </div>
    </div>
  )
}

export default App
