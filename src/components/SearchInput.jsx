import React, { useContext, useEffect, useState } from "react";
import apis from "../services/API";
import useFetch from "../Hooks/useFetch";
import { Mycontext } from "../context/myContext";

const SearchInput = () => {
  const { globalState, setGlobalState } = useContext(Mycontext);
  const [search, setSearch] = useState("");
  const [url, setUrl] = useState(``);
  const { data, loading, error } = useFetch(url);
  const searchHandle = (e) => {
    const { value } = e.target;
    setSearch(value);
    setGlobalState({
      ...globalState,
      searchText: value,
      searchData: [],
    });
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
  useEffect(() => {
    if (data) {
      setGlobalState({
        ...globalState,
        searchData: data,
        searchText: search,
      });
    }
  }, [data]);
  return (
    <input
      type="search"
      placeholder="Search retreats by title"
      value={search}
      onChange={searchHandle}
      className="outline border text-slate-700 sm:text-white py-2 px-2 sm:w-60 rounded-md outline-none w-full "
    />
  );
};

export default SearchInput;
