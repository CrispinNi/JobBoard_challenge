import React from "react";
import { useDispatch } from "react-redux";
import { setFilterTag } from "../redux/slices/jobSlice";

const tags = [
  { label: "All Jobs", value: "" },
  { label: "Trending Jobs", value: "Trending" },
  { label: "Most Recent Jobs", value: "Recent" },
  { label: "Full-time", value: "Full-time" },
  { label: "Remote", value: "Remote" },
];

const FilterTabs = () => {
  const dispatch = useDispatch();

  const handleClick = (value) => {
    dispatch(setFilterTag(value));
  };

  return (
    <div className="flex flex-wrap gap-3 mx-12 mt-16">
      {tags.map((tag, idx) => (
        <button
          key={idx}
          onClick={() => handleClick(tag.value)}
          className={`px-4 py-2 rounded-full border ${
            tag.value === "" ? "bg-[#06aeef] text-white" : "bg-white text-black font-serif"
          }`}
        >
          {tag.label}
        </button>
      ))}
    </div>
  );
};

export default FilterTabs;
