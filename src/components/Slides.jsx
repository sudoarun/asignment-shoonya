import React, { useEffect } from "react";
import { Splide, SplideSlide } from "../../node_modules/@splidejs/react-splide";
import Cards from "./Cards";
import "@splidejs/react-splide/css";
import apis from "../services/API";
import useFetch from "../Hooks/useFetch";
const Slides = () => {
  let url = `${apis.baseURL}retreats`;
  const { data, error, loading } = useFetch(url);
  const slider = {
    perPage: 3,
    perMove: 1,
    gap: "2rem",
    pagination: false,
  };

  useEffect(() => {
    const buttonRight = document.querySelector(".splide__arrow--next");
    const buttonLeft = document.querySelector(".splide__arrow--prev");
    if (buttonRight && buttonLeft) {
      buttonRight.innerHTML = "";
      buttonLeft.innerHTML = "";
      buttonRight.textContent = "Next";
      buttonLeft.textContent = "Previous";
    }
  }, []);

  return (
    <Splide options={slider} className="w-full">
      {data?.map((el) => (
        <SplideSlide key={el.id}>
          <Cards data={el} />
        </SplideSlide>
      ))}
    </Splide>
  );
};

export default Slides;
