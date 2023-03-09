import './App.css';
import React from 'react';
import Index from "./pages/index";
import About from './pages/about';
import { Route, Routes } from 'react-router-dom';



function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Index/>}/>
        <Route path="/about" element={<About/>}/>
      </Routes>
    
    </div>
  );
}

export default App;
