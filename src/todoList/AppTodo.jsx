import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import TodoItems from "./components/TodoItems";
import WelcomeMessage from "./components/WelcomeMessage";
import TodoItemsContextProvider from "./store/todo-items-store";

function AppTodo() {
  return (
    <TodoItemsContextProvider>
      <div className="min-h-screen bg-gray-900 text-white px-4 sm:px-8 py-8">
        <AppName />
        <AddTodo />
        <WelcomeMessage></WelcomeMessage>
        <TodoItems></TodoItems>
      </div>
    </TodoItemsContextProvider>
  );
}

export default AppTodo;