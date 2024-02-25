import React from "react";
import {truncate} from "lodash"
import { useNavigate } from "react-router-dom";
import HeartCards from "./HeartCards";
const PropertyCard = ({ card }) => {
  const navigate= useNavigate();
  
  return (
    <div className="flexColStart relative z-0 gap-2.5 p-2 shadow-xl  rounded-[10px] max-w-max m-auto transition duration-200 ease-in hover:cursor-pointer hover:scale-[1.025] r-card mb-4 "
    onClick={()=> navigate(`../properties/${card?._id}`)}>
      {" "}
      <HeartCards id={card?._id}/>
      <img src={card.image} alt="" className="w-60 h-40 max-w-60 rounded-xl" />
      <span className="secondaryText text-sm font-semibold">
        <span className="text-orange-400">$</span>
        {card.price}
      </span>
      <span className="titleCard text-base ">{truncate(card.title,{length: 15})}</span>
      <span className="secondaryText text-xs w-60">{truncate(card.description,{length: 80})}</span>
    </div>
  );
};

export default PropertyCard;
