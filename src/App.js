import "./App.css";
import { Routes, Route } from "react-router-dom";
import Cart from "./components/pages/Cart";
import Home from "./components/pages/Home";
import Login from "./components/pages/Login";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
