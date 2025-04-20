import { useReducer, useEffect } from "react";
import { createContext } from "react";

// creating context
export const TodoItemsContext = createContext({
  todoItems: [],
  addNewItem: () => {},
  deleteItem: () => {},
});

// useReducer's pure function
const todoItemsReducer = (currTodoItems, action) => {
  let newTodoItems = currTodoItems;
  if (action.type === "NEW_ITEM") {
    newTodoItems = [
      ...currTodoItems,
      { name: action.payload.itemName, dueDate: action.payload.itemDueDate },
    ];
  } else if (action.type === "DELETE_ITEM") {
    newTodoItems = currTodoItems.filter(
      (item) => item.name !== action.payload.itemName
    );
  } else if (action.type === "INIT_ITEMS") {
    newTodoItems = action.payload.items;
  }
  return newTodoItems;
};

const TodoItemsContextProvider = ({ children }) => {

  // geting initial todoitems from localStorage
  const initialTodoItems = JSON.parse(localStorage.getItem('todoItems')) || [];
  
  const [todoItems, dispatchTodoItems] = useReducer(todoItemsReducer, initialTodoItems);

  // adding to localStorage whenever todoItems is changing
  useEffect(() => {
    localStorage.setItem('todoItems', JSON.stringify(todoItems));
  }, [todoItems]);

  const addNewItem = (itemName, itemDueDate) => {
    const newItemAction = {
      type: "NEW_ITEM",
      payload: {
        itemName,
        itemDueDate,
      },
    };
    dispatchTodoItems(newItemAction);
  };

  const deleteItem = (todoItemName) => {
    const deleteItemAction = {
      type: "DELETE_ITEM",
      payload: {
        itemName: todoItemName,
      },
    };
    dispatchTodoItems(deleteItemAction);
  };

  return (
    <TodoItemsContext.Provider
      value={{ todoItems, addNewItem, deleteItem }}
    >
      {children}
    </TodoItemsContext.Provider>
  );
};

export default TodoItemsContextProvider;