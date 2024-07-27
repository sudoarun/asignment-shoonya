import React from "react";

const Cards = ({ data }) => {
  const { title, price, location, image, description, date } = data;
  const newDate = new Date(date * 1000).toLocaleString();
  return (
    <div
      className="bg-[#E0D9CF] p-3 rounded-md flex flex-col justify-between"
      style={{ height: "335px" }}
    >
      <div>
        <img src={image} className="h-40 w-56 rounded-lg" />
      </div>
      <div className="">
        <h6 className="font-semibold text-lg line-limit">{title && title}</h6>
        <p className="line-limit">{description && description}</p>
        <span className="block">Date : {newDate && newDate}</span>
        <span className="block">Location : {location && location}</span>
        <span className="block">Price : {price && price}</span>
      </div>
    </div>
  );
};

export default Cards;
