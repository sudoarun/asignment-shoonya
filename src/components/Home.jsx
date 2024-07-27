import React from "react";
import Filter from "./Filter";
import Slides from "./Slides";

const Home = () => {
  const imgURL =
    "https://cdn.midjourney.com/32923aeb-db8c-4c27-8e9d-fb82928b7fc1/0_2.jpeg";

  return (
    <div>
      <header>
        <div className="bg-blue-950 text-white py-3 ps-3">
          <h3 className="text-3xl font-semibold">Wellness Retreats</h3>
        </div>
      </header>
      <section className="mt-2 sm:mt-8">
        <div className="container mx-auto px-2 sm:px-0 ">
          <div className="p-5 bg-[#E0D9CF] rounded-lg">
            <div>
              <img src={imgURL} className="rounded-lg" />
            </div>
            <h6 className="sm:text-3xl text-2xl pt-4 pb-3">
              Discover Your Inner Peace
            </h6>
            <p className="text-sm sm:text-base">
              Join us for serious of wellness retreats designed to help you find
              tranquility rejuvenation
            </p>
          </div>
        </div>
      </section>
      <section>
        <div className="container mx-auto mt-5 px-2 sm:px-0">
          <Filter />
        </div>
      </section>
      <section>
        <div className="container mx-auto mt-5">
          <Slides />
        </div>
      </section>
      <section className="pb-5 pt-20">
        <h6 className="text-center">
          ©2024 Wellness Retreats. All rights reserved.
        </h6>
      </section>
    </div>
  );
};

export default Home;
