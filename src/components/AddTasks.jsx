import { useState } from "react";
import Input from "./Input";

function AddTasks(props) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  return (
    <div className="space-y-4 p-6 bg-slate-200 rounded-md shadow flex flex-col">
      <Input
        onChange={(event) => setTitle(event.target.value)}
        value={title}
        type="text"
        placeholder="Digite o título da tarefa"
      />

      <Input
        onChange={(event) => setDescription(event.target.value)}
        value={description}
        type="text"
        placeholder="Digite a descrição da tarefa"
      />
      <button
        onClick={() => {
          if (!title || !description)
            return alert("Preencha as informações da tarefa");
          props.onAddTask(title, description);
          setTitle("");
          setDescription("");
        }}
        className="bg-slate-500 text-white ox-4 py-2 rounded-md"
      >
        Adicionar
      </button>
    </div>
  );
}

export default AddTasks;
