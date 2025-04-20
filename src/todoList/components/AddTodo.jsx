import { useContext, useState } from "react";
import { TodoItemsContext } from "../store/todo-items-store";

function AddTodo() {
  const { addNewItem } = useContext(TodoItemsContext);
  const [todoName, setTodoName] = useState("");
  const [dueDate, setDueDate] = useState("");

  const handleAddButtonClicked = () => {
    if (!todoName || !dueDate) return; // if user didn't mention anything than it will return
    addNewItem(todoName, dueDate);
    setDueDate("");
    setTodoName("");
  };

  return (
    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center my-6 px-4">
      <input type="text" placeholder="Enter Todo Here"
        value={todoName}
        onChange={(e) => setTodoName(e.target.value)}
        className="w-full sm:w-1/2 p-3 rounded-lg bg-gray-800 text-white placeholder-gray-400 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-purple-500"
      />
      <input type="date"
        value={dueDate}
        onChange={(e) => setDueDate(e.target.value)}
        className="w-full sm:w-1/4 p-3 rounded-lg bg-gray-800 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-purple-500"
      />
      <button
        onClick={handleAddButtonClicked}
        className="bg-purple-600 hover:bg-purple-700 text-white font-medium px-6 py-3 rounded-lg transition-all w-full sm:w-auto"
      >
        Add
      </button>
    </div>
  );
}

export default AddTodo;
