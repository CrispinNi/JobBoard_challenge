import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import Navbar from "../components/Navbar";
import Hero from "../components/HeroJob";
import ApplyModal from "../components/apply";
import { MapPin, Mail, Clock, Briefcase, Calendar } from "lucide-react";
import Footer from "../components/footer";
import { fetchJobs } from "../redux/slices/jobSlice";
import "@fontsource/inter-tight";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


const JobDetailPage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const [showModal, setShowModal] = useState(false);

  const { list, loading, error } = useSelector((state) => state.jobs);
  const job = list[parseInt(id)];
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  useEffect(() => {
    if (list.length === 0 || !job) {
      dispatch(fetchJobs());
    }
  }, [list.length, job, dispatch]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;
  if (!job) return <p>Job not found.</p>;

  const handleApplyClick = () => {
    if (!isAuthenticated) {
      toast.error("Please log in to apply for this job.");
      return;
    }
    setShowModal(true);
  };

  return (
    <div className="min-h-screen font-interTight bg-white">
      <Navbar />
      <Hero />
      <div className="max-w-6xl mx-auto p-6 flex flex-col md:flex-row gap-8">
        {/* Left Section */}
        <div className="flex-1">
          <h1 className="text-3xl font-bold">{job.title}</h1>
          <p className="text-lg text-gray-600">{job.company}</p>
          <p className="text-blue-500">
            {job.location} / {job.country} / {job.remote ? "Remote" : "On-site"}
          </p>

          {/* Overview */}
          <section className="mt-8">
            <h2 className="text-xl font-bold mb-2">Overview</h2>
            <p>{job.overview || "No overview available."}</p>
          </section>

          {/* Responsibilities */}
          <section className="mt-8">
            <h2 className="text-xl font-bold mb-2">Responsibilities</h2>
            <div className="space-y-2">
              {job.responsibilities || "None listed."}
            </div>
          </section>

          {/* Qualifications */}
          <section className="mt-8">
            <h2 className="text-xl font-bold mb-2">Qualifications</h2>
            <ul className="list-disc list-inside space-y-1">
              {job.qualifications || "None listed."}
            </ul>
          </section>
        </div>

        {/* Right Section */}
        <div className="w-full md:w-80">
          <div className="border rounded-xl p-6 shadow-sm space-y-4">
            <div className="flex items-center gap-2 text-gray-600">
              <MapPin className="w-5 h-5" />
              <span>{job.location}</span>
            </div>
            <p className="text-gray-500">
              Please send us your detailed CV to apply for this job post
            </p>
            <p className="text-2xl font-bold">
              {job.salary ? `$${job.salary}` : "Not specified"}
            </p>
            <span className="text-gray-500 text-sm">Avg. salary</span>

            <div className="flex items-center gap-2 text-gray-600">
              <Mail className="w-5 h-5" />
              <span>{job.email || "hr@example.com"}</span>
            </div>
            <div className="flex items-center gap-2 text-gray-600">
              <Clock className="w-5 h-5" />
              <span>{job.remote ? "Remote" : "On-site"}</span>
            </div>
            <div className="flex items-center gap-2 text-gray-600">
              <Briefcase className="w-5 h-5" />
              <span>{job.jobCategory || "General"}</span>
            </div>
            <div className="flex items-center gap-2 text-gray-600">
              <Calendar className="w-5 h-5" />
              <span>{job.date}</span>
            </div>

            <button
              onClick={handleApplyClick}
              className="w-full mt-4 bg-[#06aeef] text-white py-2 rounded-full font-medium"
            >
              Apply for this job
            </button>
          </div>
        </div>
      </div>

      {/* Apply Modal */}
      <ApplyModal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        jobId={id}
      />

      <Footer />
    </div>
  );
};

export default JobDetailPage;
