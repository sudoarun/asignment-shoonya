import React from "react";
import SearchInput from "./SearchInput";

const Filter = () => {
  return (
    <div className="sm:flex justify-between items-center">
      <div className="sm:flex gap-4 items-center">
        <select
          name="Yoga"
          id=""
          className="bg-slate-300 text-slate-700 sm:text-white sm:bg-blue-950 px-1 py-2 sm:rounded-md w-full sm:w-auto mb-2 sm:mb-0"
        >
          <option value="none">Flter by date</option>
          <option value="saab">2023-2024</option>
          <option value="opel">2024-2025</option>
        </select>
        <select
          name="Yoga"
          id=""
          className="bg-slate-300 text-slate-700 sm:text-white sm:bg-blue-950 px-1 py-2 sm:rounded-md w-full sm:w-auto mb-2 sm:mb-0"
        >
          <option value="none">Flter by Type</option>
          <option value="yoga">Yog</option>
          <option value="meditation">Meditation</option>
          <option value="detok">Detox</option>
        </select>
      </div>

      <SearchInput />
    </div>
  );
};

export default Filter;
