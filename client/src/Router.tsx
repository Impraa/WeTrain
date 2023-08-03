import { Route, Routes } from "react-router-dom";
import Navbar from "./layout/navbar/Navbar";
import Homepage from "./pages/homepage/Homepage";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";

function Router() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route index element={<Homepage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </>
  );
}

export default Router;
