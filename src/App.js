import "./App.css";
import { Routes, Route } from "react-router-dom";
import Admin from "./pages/admin/admin";
import Market from "./pages/market/market";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Market />}></Route>
      <Route path="market" element={<Market />}></Route>
      <Route path="admin" element={<Admin />}></Route>
    </Routes>
  );
}

export default App;
