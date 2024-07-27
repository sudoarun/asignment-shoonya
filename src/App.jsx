import React from "react";
import Slides from "./components/Slides";

const App = () => {
  const imgURL =
    "https://cdn.midjourney.com/32923aeb-db8c-4c27-8e9d-fb82928b7fc1/0_2.jpeg";

  return (
    <>
      <header>
        <div className="bg-blue-950 text-white py-3 ps-3">
          <h3 className="text-3xl font-semibold">Wellness Retreats</h3>
        </div>
      </header>
      <section className="mt-8">
        <div className="container mx-auto ">
          <div className="p-5 bg-[#E0D9CF] rounded-lg">
            <div>
              <img src={imgURL} className="rounded-lg" />
            </div>
            <h6 className="text-3xl pt-4 pb-3">Discover Your Inner Peace</h6>
            <p>
              Join us for serious of wellness retreats designed to help you find
              tranquility rejuvenation
            </p>
          </div>
        </div>
      </section>
      <section>
        <div className="container mx-auto mt-5">
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

            <input
              type="search"
              placeholder="Search here..."
              className="bg-blue-950 text-white py-1 px-2 w-60 rounded-md outline-none"
            />
          </div>
        </div>
      </section>
      <section>
        <div className="container mx-auto mt-5">
          <Slides />
        </div>
      </section>
      <section className="pb-5 pt-20">
        <h6 className="text-center">
          2024 Wellness Retreats. All rights reserved.
        </h6>
      </section>
    </>
  );
};

export default App;
