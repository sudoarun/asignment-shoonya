import React, { useState } from "react";
import Home from "./components/Home";
import { Mycontext } from "./context/myContext";

const App = () => {
  const [globalState, setGlobalState] = useState({
    searchText: "",
    searchData: [],
  });
  return (
    <>
      <Mycontext.Provider value={{ globalState, setGlobalState }}>
        <Home />
      </Mycontext.Provider>
    </>
  );
};

export default App;
