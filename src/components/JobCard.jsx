import React from "react";
import { Calendar } from "lucide-react";
import { Link } from "react-router-dom";
import '@fontsource/inter-tight'; 

const JobCard = ({ job, index }) => (
  <Link
    to={`/jobs/${index}`}
    className="block border rounded-2xl p-6 shadow-sm hover:bg-gray-50 transition"
  >
    <div className="flex flex-col md:flex-row justify-between items-start md:items-center font-interTight">
      <div>
        <h2 className="text-xl font-bold font-serif">{job.title}</h2>
        <p className="text-sm text-black-200 pt-1 font-normal font-serif">
          {job.location} / {job.remote && "Remote"} / Avg. Salary{" "}
          <span className="font-medium">{job.salary}</span>
        </p>
        <div className="mt-2 flex gap-2 flex-wrap font-serif text-[#06aeef]">
          {job.tags.map((tag, i) => (
            <span
              key={i}
              className="bg-gray-100 text-sm px-3 py-2 rounded-full shadow-md"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
      <div className="mt-4 md:mt-0 flex items-center gap-2 text-sm font-bold text-[#21295c]">
        <Calendar className="w-4 h-4" /> {job.date}
      </div>
    </div>
  </Link>
);

export default JobCard;
