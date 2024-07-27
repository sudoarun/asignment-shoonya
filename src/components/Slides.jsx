import React, { useContext, useEffect, useState } from "react";
import { Splide, SplideSlide } from "../../node_modules/@splidejs/react-splide";
import Cards from "./Cards";
import "@splidejs/react-splide/css";
import apis from "../services/API";
import useFetch from "../Hooks/useFetch";
import { Mycontext } from "../context/myContext";
const Slides = () => {
  let url = `${apis.baseURL}retreats`;
  const { data, error, loading } = useFetch(url);
  const { globalState } = useContext(Mycontext);
  const [slidesData, setSlidesData] = useState([]);
  const slider = {
    perPage: 3,
    perMove: 1,
    gap: "2rem",
    pagination: false,
    breakpoints: {
      1024: {
        perPage: 3,
      },
      767: {
        perPage: 2,
      },
      640: {
        perPage: 1,
      },
    },
  };
  useEffect(() => {
    setTimeout(() => {
      const buttonRight = document.querySelector(".splide__arrow--next");
      const buttonLeft = document.querySelector(".splide__arrow--prev");
      if (buttonRight && buttonLeft) {
        buttonRight.innerHTML = "";
        buttonLeft.innerHTML = "";
        buttonRight.textContent = "Next";
        buttonLeft.textContent = "Previous";
      }
    }, 1200);
  }, [document]);
  useEffect(() => {
    if (globalState.searchText) {
      if (globalState.searchData.length > 0) {
        setSlidesData(globalState.searchData);
        return;
      }
      setSlidesData(data);
    } else if (globalState.filterText) {
      setSlidesData(globalState.filterByType);
      return;
    } else if (globalState.filterDate.length > 0 && data) {
      let arr = globalState.filterDate.map((item) => Number(item));
      let filtered = data.filter((item) =>
        arr.includes(new Date(item.date * 1000).getFullYear())
      );
      setSlidesData(filtered);
      return;
    } else {
      setSlidesData(data);
    }
  }, [globalState, data]);

  return (
    <div>
      {loading ? (
        <div
          className="flex justify-center items-center"
          style={{ height: "300" }}
        >
          <h6 className="text-center">Loading...</h6>
        </div>
      ) : (
        <Splide options={slider} className="w-full px-2 sm:px-0">
          {slidesData?.map((el) => (
            <SplideSlide key={el.id}>
              <Cards data={el} />
            </SplideSlide>
          ))}
        </Splide>
      )}
    </div>
  );
};

export default Slides;
