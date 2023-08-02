import { Route, Routes } from "react-router-dom";
import Navbar from "./layout/navbar/Navbar";
import Homepage from "./pages/homepage/Homepage";

function Router() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route index element={<Homepage />} />
      </Routes>
    </>
  );
}

export default Router;
