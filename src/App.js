import "./App.css";
import { Routes, Route } from "react-router-dom";
import Header from "./components/header/Header";
import Cart from "./components/pages/Cart";
import Home from "./components/pages/Home";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </div>
  );
}

export default App;
