import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import RecipeGenerator from "./recipeMaker/RecipeGenerator";
import RecipeFinder from "./recipeMaker/RecipeFinder";
import AppTodo from "./todoList/AppTodo";
import AppNews from "./news/AppNews";
import Navbar from "./components/Navbar"; 
import SignUp from "./components/SignUp";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/generator" element={<RecipeGenerator />} />
        <Route path="/finder" element={<RecipeFinder />} />
        <Route path="/AppTodo" element={<AppTodo />} />
        <Route path="/news" element={<AppNews />} />
        <Route path="/signup" element={<SignUp/>} />
      </Routes>
    </Router>
  );
}

export default App;
