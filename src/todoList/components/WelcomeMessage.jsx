import { useContext } from "react";
import { TodoItemsContext } from "../store/todo-items-store";

const WelcomeMessage = () => {
  const { todoItems } = useContext(TodoItemsContext);
  return (
    todoItems.length === 0 && <p className="text-[30px] mt-[50px] font-semibold">Enjoy Your Day</p>
  );
};

export default WelcomeMessage;