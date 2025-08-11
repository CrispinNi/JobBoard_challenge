import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const AdminDashboard = () => {
  const [applications, setApplications] = useState([]);
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  const navigate = useNavigate();

  if (!isAuthenticated) {
    navigate("/login");
  }

  // // Authentication protection
  // useEffect(() => {
  //   const token = localStorage.getItem("adminToken");
  //   if (!token) {
  //     navigate("/login"); // redirect if not authenticated
  //   }
  // }, [navigate]);

  // Fetch applications
  useEffect(() => {
    const fetchApplications = async () => {
      try {
        const res = await axios.get("http://localhost:3001/applications", {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("adminToken")}`,
          },
        });
        setApplications(res.data);
      } catch (error) {
        console.error("Failed to fetch applications", error);
      }
    };
    fetchApplications();
  }, []);

  // Delete handler
  const handleDelete = async (id) => {
    const confirm = window.confirm(
      "Are you sure you want to delete this application?"
    );
    if (!confirm) return;

    try {
      await axios.delete(`http://localhost:3001/applications/${id}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("adminToken")}`,
        },
      });
      setApplications(applications.filter((app) => app.id !== id));
    } catch (error) {
      console.error("Failed to delete application", error);
    }
  };

  // Download handler
  const handleDownload = (fileName) => {
    window.open(`http://localhost:3001/uploads/${fileName}`, "_blank");
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white p-6">
      <h1 className="text-3xl font-bold mb-6 text-center text-indigo-400">
        Admin Dashboard
      </h1>

      {applications.length === 0 ? (
        <p className="text-center text-gray-400">No applications found.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {applications.map((app) => (
            <div
              key={app.id}
              className="bg-gray-800 rounded-xl shadow-lg p-6 border border-gray-700"
            >
              <h2 className="text-xl font-semibold text-indigo-300 mb-2">
                {app.firstName} {app.secondName}
              </h2>
              <p className="text-sm text-gray-300">Email: {app.email}</p>
              <p className="text-sm text-gray-300">Job ID: {app.jobId}</p>
              <p className="text-sm text-gray-300 truncate">
                CV: {app.cvFileName || "N/A"}
              </p>
              <p className="text-sm text-gray-300 truncate mb-4">
                Cover Letter: {app.coverLetterFileName || "N/A"}
              </p>

              <div className="flex flex-wrap gap-2">
                <button
                  onClick={() => navigate(`/application/${app.id}`)}
                  className="bg-indigo-500 hover:bg-indigo-600 text-white px-3 py-1 rounded text-sm"
                >
                  View
                </button>
                {app.cvFileName && (
                  <button
                    onClick={() => handleDownload(app.cvFileName)}
                    className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded text-sm"
                  >
                    Download CV
                  </button>
                )}
                {app.coverLetterFileName && (
                  <button
                    onClick={() => handleDownload(app.coverLetterFileName)}
                    className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded text-sm"
                  >
                    Download Cover
                  </button>
                )}
                <button
                  onClick={() => handleDelete(app.id)}
                  className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded text-sm"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default AdminDashboard;
