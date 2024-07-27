import React from "react";
import SearchInput from "./SearchInput";

const Filter = () => {
  return (
    <div className="flex justify-between items-center">
      <div className="flex gap-4 items-center">
        <select
          name="Yoga"
          id=""
          className="bg-blue-950 px-1 py-1 text-white rounded-md"
        >
          <option value="none">Flter by date</option>
          <option value="saab">2023-2024</option>
          <option value="opel">2024-2025</option>
        </select>
        <select
          name="Yoga"
          id=""
          className="bg-blue-950 px-1 py-1 text-white rounded-md"
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
