import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
const Home = React.lazy(() => import("containers/home/Home"));
const Login = React.lazy(() => import("containers/login/Login"));
export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
};
