import { Route, Routes } from "react-router-dom";
import SignUp from "../component/SignUp";
import Login from "../component/Login";
import Landing from "../component/Landing";
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
