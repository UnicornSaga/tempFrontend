import './App.css';
import { Routes, Route, Navigate } from "react-router-dom";
import Login from './Component/Login/Login';
import Homepage from './Component/Homepage/Homepage';

function App() {
  return (
    <Routes>
      <Route path="/" exact element={<Login />} />
      <Route path="/home" element={<Homepage />} />
    </Routes>
  );
}

export default App;
