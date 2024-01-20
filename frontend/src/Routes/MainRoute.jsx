import { Route, Routes } from "react-router-dom";
import SignUp from "../component/Authentication/SignUp";
import Login from "../component/Authentication/Login";
import Landing from "../component/Homepage/Landing";
import PrivateRoute from "./PrivateRoute";

export const MainRoute = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <PrivateRoute>
            <Landing />
          </PrivateRoute>
        }
      />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
    </Routes>
  );
};
