import React, { useContext, useEffect, useState } from "react";
import useFetch from "../Hooks/useFetch";
import apis from "../services/API";
import { Mycontext } from "../context/myContext";

const SelectInput = () => {
  const [state, setState] = useState({
    date: "",
    yoga: "",
  });
  const { globalState, setGlobalState } = useContext(Mycontext);
  const [url, setUrl] = useState("");
  const { data, error } = useFetch(url);
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === "yoga") {
      setState({ ...state, [name]: value === "none" ? "" : value });
      setGlobalState({
        ...globalState,
        filterText: value === "none" ? "" : value,
      });
      return;
    }
    setState({
      ...state,
      [name]: value === "none" ? [] : [value?.slice(0, 4), value?.slice(5)],
    });
    setGlobalState({
      ...globalState,
      filterDate: value === "none" ? [] : [value?.slice(0, 4), value?.slice(5)],
    });
  };
  const fetchApi = () => {
    let url = `${apis.baseURL}retreats?filter=${state.yoga}`;
    if (state.yoga) {
      setUrl(url);
    }
  };

  useEffect(() => {
    fetchApi();
  }, [state]);
  useEffect(() => {
    if (data) {
      if (data && state.yoga) {
        setGlobalState({
          ...globalState,
          filterByType: data,
          filterText: state.yoga,
        });
      }
    }
  }, [data, state.yoga]);
  return (
    <div className="sm:flex gap-4 items-center">
      <select
        name="date"
        id=""
        onChange={handleInputChange}
        className="bg-slate-300 text-slate-700 sm:text-white sm:bg-blue-950 px-1 py-2 sm:rounded-md w-full sm:w-auto mb-2 sm:mb-0"
      >
        <option value="none">Flter by date</option>
        <option value="2023-2024">2023-2024</option>
        <option value="2024-2025">2024-2025</option>
      </select>
      <select
        name="yoga"
        id=""
        onChange={handleInputChange}
        className="bg-slate-300 text-slate-700 sm:text-white sm:bg-blue-950 px-1 py-2 sm:rounded-md w-full sm:w-auto mb-2 sm:mb-0"
      >
        <option value="none">Flter by Type</option>
        <option value="yoga">Yog</option>
        <option value="meditation">Meditation</option>
        <option value="detok">Detox</option>
      </select>
    </div>
  );
};

export default SelectInput;
