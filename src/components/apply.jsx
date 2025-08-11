import React, { useState } from "react";
import axios from "axios";

const ApplyModal = ({ isOpen, onClose, jobId }) => {
  const [formData, setFormData] = useState({
    firstName: "",
    secondName: "",
    email: "",
    cv: null,
    coverLetter: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: files ? files[0] : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const submission = {
      firstName: formData.firstName,
      secondName: formData.secondName,
      email: formData.email,
      jobId,
      cvFileName: formData.cv?.name || "",
      coverLetterFileName: formData.coverLetter?.name || "",
    };

    try {
      await axios.post("http://localhost:3001/applications", submission);
      alert("Application submitted!");
      onClose();
    } catch (error) {
      console.error(error);
      alert("Submission failed");
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-40 flex items-center justify-center">
      <div className="bg-white p-6 rounded-lg w-full max-w-lg relative">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-500 hover:text-black"
        >
          ✕
        </button>
        <h2 className="text-xl font-bold mb-4">Apply for Job</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            name="firstName"
            type="text"
            placeholder="First Name"
            value={formData.firstName}
            onChange={handleChange}
            className="w-full border px-4 py-2 rounded"
            required
          />
          <input
            name="secondName"
            type="text"
            placeholder="Second Name"
            value={formData.secondName}
            onChange={handleChange}
            className="w-full border px-4 py-2 rounded"
            required
          />
          <input
            name="email"
            type="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className="w-full border px-4 py-2 rounded"
            required
          />
          <div>
            <label className="block text-sm mb-1">Attach CV (PDF)</label>
            <input
              name="cv"
              type="file"
              accept="application/pdf"
              onChange={handleChange}
              className="w-full border px-4 py-2 rounded"
            />
          </div>
          <div>
            <label className="block text-sm mb-1">
              Attach Cover Letter (PDF)
            </label>
            <input
              name="coverLetter"
              type="file"
              accept="application/pdf"
              onChange={handleChange}
              className="w-full border px-4 py-2 rounded"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-purple-600 text-white py-2 rounded"
          >
            Submit Application
          </button>
        </form>
      </div>
    </div>
  );
};

export default ApplyModal;
