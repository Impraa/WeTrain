import { Route, Routes } from "react-router-dom";
import { Suspense, lazy } from "react";
import { Verify } from "./pages/Verify/Verify";
import { Error404 } from "./pages/Error404/Error404";

const Homepage = lazy(() => import("./pages/homepage/Homepage"));
const Navbar = lazy(() => import("./layout/navbar/Navbar"));
const Footer = lazy(() => import("./layout/footer/Footer"));
const Register = lazy(() => import("./pages/Register/Register"));
const Login = lazy(() => import("./pages/Login/Login"));
const ForgotPassword = lazy(
  () => import("./pages/Forgot-Password/ForgotPassword")
);
const EmailSent = lazy(() => import("./pages/Email-Sent/EmailSent"));

function Router() {
  return (
    <>
      <Suspense>
        <Navbar />
        <Routes>
          <Route index element={<Homepage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/register" element={<Register />} />
          <Route path="/email-sent" element={<EmailSent />} />
          <Route path="/verify/:id" element={<Verify />} />
          <Route path="*" element={<Error404 />} />
        </Routes>
        <Footer />
      </Suspense>
    </>
  );
}

export default Router;
