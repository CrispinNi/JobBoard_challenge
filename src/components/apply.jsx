import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import "@fontsource/inter-tight";


const ApplyModal = ({ isOpen, onClose, jobId }) => {
  const [formData, setFormData] = useState({
    firstName: "",
    secondName: "",
    email: "",
    cv: null,
    coverLetter: null,
  });

  const [show, setShow] = useState(false);
  const modalRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      setShow(true); // start animation in
    } else {
      const timeout = setTimeout(() => setShow(false), 300); // wait for animation out
      return () => clearTimeout(timeout);
    }
  }, [isOpen]);

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

  const handleOverlayClick = (e) => {
    if (modalRef.current && !modalRef.current.contains(e.target)) {
      onClose();
    }
  };

  if (!isOpen && !show) return null;

  return (
    <div
      className={`fixed inset-0 z-50 flex items-end md:items-center justify-center transition-colors duration-300 ${
        isOpen ? "bg-white bg-opacity-40" : "bg-white bg-opacity-0"
      }`}
      onClick={handleOverlayClick}
    >
      <div
        ref={modalRef}
        className={`bg-white p-6 rounded-t-2xl md:rounded-lg w-full max-w-lg relative transform transition-transform duration-300 ease-out ${
          isOpen ? "translate-y-0" : "translate-y-full md:translate-y-8 opacity-0"
        }`}
        onClick={(e) => e.stopPropagation()} // prevent clicks inside modal from closing it
      >
      <div className="bg-gray-200 rounded-lg">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-500 hover:text-black p-8"
        >
          ✕
        </button>

        <h2 className="text-xl font-bold mb-4 p-8">Apply for Job</h2>

        <form onSubmit={handleSubmit} className="space-y-4 p-8">
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
  <label htmlFor="cv" className="block text-sm mb-1">Attach CV (PDF)</label>
  <input
    id="cv"
    name="cv"
    type="file"
    accept="application/pdf"
    onChange={handleChange}
    className="w-full border px-4 py-2 rounded"
  />
</div>
<div>
  <label htmlFor="coverLetter" className="block text-sm mb-1">
    Attach Cover Letter (PDF)
  </label>
  <input
    id="coverLetter"
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
    </div>
  );
};

export default ApplyModal;
