import React from "react";

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
          <div className="flex justify-between">
            <button className="bg-blue-950 px-3 py-1 text-white rounded-md">
              Select date
            </button>
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
          <div>
            <div className="bg-[#E0D9CF] w-auto">
              <div>
                <img
                  src="https://cdn.midjourney.com/5b0cec06-2f37-4828-8602-316f6dbd0eb6/0_0.jpeg"
                  className="h-40 w-48"
                />
              </div>
              <h6>Forest Yogo Retreat</h6>
              <p>ncdksds</p>
              <span>Date :sd</span>
              <span>Date :sd</span>
              <span>Date :sd</span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default App;
