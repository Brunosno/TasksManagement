import { ChevronRight, Trash2Icon } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Button from "./Button";

function Tasks(props) {
  const navigate = useNavigate();

  function onSeeDetails(task){
    const query = new URLSearchParams();
    query.set("title", task.title);
    query.set("description", task.description);
    navigate(`/task?${query.toString()}`)
  }

  return (
    <ul className="space-y-4 p-6 bg-slate-200 rounded-md shadow">
      {props.tasks.map((task) => (
        <li key={task.id} className="flex gap-2">
          <button
            onClick={() => props.onTaskClick(task.id)}
            className={`bg-slate-400 text-white p-2 rounded-md w-full text-left ${
              task.IsCompleted && "line-through"
            }`}
          >
            {task.title}
          </button>

          <Button onClick={() => onSeeDetails(task)} className="bg-slate-400 text-white p-2 rounded-md">
            <ChevronRight />
          </Button>

          <Button onClick={() => props.onDeleteTask(task.id)} className="bg-slate-400 text-white p-2 rounded-md">
            <Trash2Icon />
          </Button>
        </li>
      ))}
    </ul>
  );
}

export default Tasks;
