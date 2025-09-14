import React from 'react';
import Register from './register';
import Login from './login';
import CreateCourse from './create_course';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
function App() {
  return (
   <BrowserRouter>
    
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login/>} />
       <Route path="/Course" element={<CreateCourse/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;