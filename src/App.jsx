import React from "react";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from "./Home";
import RecipeGenerator from "./recipeMaker/RecipeGenerator";
import RecipeFinder from "./recipeMaker/RecipeFinder";
import AppTodo from "./todoList/AppTodo";
import AppNews from "./news/AppNews";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/generator" element={<RecipeGenerator />} />
        <Route path="/finder" element={<RecipeFinder />} />
        <Route path="/AppTodo" element={<AppTodo />} />
        <Route path="/news" element={<AppNews />} />
      </Routes>
    </Router>
  );
}

export default App;