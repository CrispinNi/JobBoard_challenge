import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchJobs } from "../redux/slices/jobSlice";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import FilterTabs from "../components/FilterTabs";
import JobCard from "../components/JobCard";
import Footer from "../components/footer";

export default function HomePage() {
  const dispatch = useDispatch();
  const { list, searchTerm, filterTag, loading, error } = useSelector(
    (state) => state.jobs
  );

  useEffect(() => {
    dispatch(fetchJobs());
  }, [dispatch]);

  const filteredJobs = list.filter((job) => {
    const matchesSearch = job.title
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const matchesTag = filterTag ? job.tags.includes(filterTag) : true;
    return matchesSearch && matchesTag;
  });

  return (
    <div className="min-h-screen font-sans bg-white">
      <Navbar />
      <Hero />
      <FilterTabs />

      <div className=" mx-12 mt-8 space-y-6 px-4">
        {loading && (
          <p className="text-center text-gray-500">Loading jobs...</p>
        )}
        {error && <p className="text-center text-red-500">{error}</p>}
        {!loading &&
          !error &&
          filteredJobs.map((job, index) => (
            <JobCard key={index} job={job} index={index} />
          ))}
      </div>
      <div >
       <Footer/>
      </div>
      
    </div>
  );
}
