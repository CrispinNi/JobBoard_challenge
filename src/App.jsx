import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { Provider, useSelector } from "react-redux";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import store from "./redux/store";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import JobDetailPage from "./pages/JobDetailPage";
import AdminDashboard from "./pages/AdminDashboard";
import Test from "./pages/Test";
import { restoreAuth } from "./redux/slices/authSlice.js";
import ProtectedRoute from "./components/ProtectedRoute.jsx";

const savedAuth = localStorage.getItem("auth");
if (savedAuth) {
  store.dispatch(restoreAuth(JSON.parse(savedAuth)));
}

const PrivateRoute = ({ children }) => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  return isAuthenticated ? children : <Navigate to="/login" />;
};

const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<HomePage />} />
    <Route path="/login" element={<LoginPage />} />
    <Route path="/register" element={<RegisterPage />} />
    <Route path="/jobs/:id" element={<JobDetailPage />} />
    <Route
      path="/admin"
      element={
        <ProtectedRoute role="AdminDashboard">
          <AdminDashboard />
        </ProtectedRoute>
      }
    />
    <Route path="/test" element={<Test />} />
    <Route
      path="/protected"
      element={
        <PrivateRoute>
          <div className="p-8 text-center">This is a protected route</div>
        </PrivateRoute>
      }
    />
  </Routes>
);

export default function App() {
  return (
    <Provider store={store}>
      <Router>
        {/* Toast container so notifications appear on any page */}
        <ToastContainer position="top-right" autoClose={3000} />
        <AppRoutes />
      </Router>
    </Provider>
  );
}
