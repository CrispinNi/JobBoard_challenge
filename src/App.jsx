import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { Provider, useSelector } from "react-redux";
import store from "./redux/store";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import JobDetailPage from "./pages/JobDetailPage";
import AdminDashboard from "./pages/AdminDashboard";
import Test from "./pages/Test";
import { restoreAuth } from "./redux/slices/authSlice.js"

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
    <Route path="/admin" element={<AdminDashboard />} />
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
        <AppRoutes />
      </Router>
    </Provider>
  );
}
