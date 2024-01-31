import React from "react";
import { AiFillHeart } from "react-icons/ai";
const PropertyCard = ({ card }) => {
  return (
    <div className="flexColStart r-card gap-2.5 p-2 shadow-xl  rounded-[10px] max-w-max m-auto transition duration-200 ease-in hover:cursor-pointer hover:scale-[1.025]  ">
      {" "}
      <AiFillHeart size={24} className="absolute top-[22px] right-[25px] z-1" color="white" />
      <img src={card.image} alt="" className="w-[100%] max-w-60" />
      <span className="secondaryText text-sm font-semibold">
        <span className="text-orange-400">$</span>
        {card.price}
      </span>
      <span className="titleCard text-base ">{card.name}</span>
      <span className="secondaryText text-xs w-60">{card.detail}</span>
    </div>
  );
};

export default PropertyCard;
