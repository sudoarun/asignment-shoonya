import React, { useEffect, useState } from "react";
import apis from "../services/API";
import useFetch from "../Hooks/useFetch";

const SearchInput = () => {
  const [search, setSearch] = useState("");
  const [url, setUrl] = useState(``);
  const { data, loading } = useFetch(url);
  const searchHandle = (e) => {
    const { value } = e.target;
    setSearch(value);
  };
  useEffect(() => {
    if (!search) {
      return;
    }
    const delay = setTimeout(() => {
      setUrl(`${apis.baseURL}retreats?filter=${search}`);
    }, 1200);
    return () => clearTimeout(delay);
  }, [search]);
  return (
    <input
      type="search"
      placeholder="Search here..."
      value={search}
      onChange={searchHandle}
      className="bg-blue-950 text-white py-1 px-2 w-60 rounded-md outline-none"
    />
  );
};

export default SearchInput;
