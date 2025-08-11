import React from "react";
import { useDispatch } from "react-redux";
import { setSearchTerm } from "../redux/slices/jobSlice";
import { Search } from "lucide-react";
import '@fontsource/inter-tight'; 

const Hero = () => {
  const dispatch = useDispatch();

  const handleChange = (e) => {
    dispatch(setSearchTerm(e.target.value));
  };

  return (
    <section className="flex justify-center items-center p-6 mx-10 font-interTight">
      <div className="w-full rounded-3xl bg-gradient-to-r from-blue-600 to-blue-800 p-12 text-center text-white relative">
        {/* Title */}
        <h1 className="text-6xl font-bold mb-4">Finding a job</h1>
        {/* Subtitle */}
        <p className="text-lg max-w-2xl mx-auto">
          When you're searching for a job, there are a few things you can do to
          get the most out of your search
        </p>

        {/* Search Box */}
        <div className="absolute left-1/2 transform -translate-x-1/2 bottom-[-30px] w-full max-w-xl">
          <div className="flex items-center bg-white rounded-full shadow-lg px-4 py-2">
            <Search className="text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Type to search ..."
              onChange={handleChange}
              className="flex-1 px-3 py-2 focus:outline-none text-gray-700"
            />
            <button className="bg-[#06aeef] text-white px-6 py-2 rounded-full font-medium">
              Search
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
