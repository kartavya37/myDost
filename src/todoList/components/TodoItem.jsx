import { useContext } from "react";
import { TodoItemsContext } from "../store/todo-items-store";

function TodoItem({ todoName, todoDate }) {
  const { deleteItem } = useContext(TodoItemsContext);

  return (
    <div className="w-full bg-gray-700 text-white rounded-lg shadow-lg p-4 mb-4 flex flex-col sm:flex-row justify-between items-center gap-2 sm:gap-4">
      <div className="text-lg font-semibold w-full sm:w-1/2 text-center sm:text-left">
        {todoName}
      </div>
      <div className="text-sm text-gray-300 w-full sm:w-1/4 text-center sm:text-left">
        {todoDate}
      </div>
      <div className="w-full sm:w-auto text-center">
        <button
          onClick={() => deleteItem(todoName)}
          className="bg-red-600 hover:bg-red-700 text-white px-5 py-2 rounded-lg transition-all"
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export default TodoItem;
