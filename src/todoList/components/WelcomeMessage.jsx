import { useContext } from "react";
import { TodoItemsContext } from "../store/todo-items-store";

const WelcomeMessage = () => {
  const { todoItems } = useContext(TodoItemsContext);

  return (
    todoItems.length === 0 && <p className="text-3xl sm:text-4xl font-semibold text-center mt-20 text-green-400 animate-pulse"> Enjoy Your Day  </p> 
  );
};

export default WelcomeMessage;
