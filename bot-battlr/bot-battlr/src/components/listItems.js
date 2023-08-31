import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

function listItem({ bot }) {
  const [isEnlisted, setIsEnlisted] = useState(false);

  const navigate = useNavigate();

  const handleEnlistClick = () => {
    setIsEnlisted(!isEnlisted);
  };

  const handleDetailsClick = () => {
    navigate(`/details/${bot.id}`);
  };

  return <div className="botcollection">{/* Bot details and buttons */}</div>;
}
function BotDetails({ bot }) {
  return (
    <div className="bot-details">
      <h2>Bot Details</h2>
      <p>Name: {bot.name}</p>
      <p>Description: {bot.description}</p>
      <p>Price: ${bot.price}</p>

      <div className="buttons">
        <Link to={`/list/${bot.id}`} className="button">
          View Details
        </Link>
        <button className="button">Add to Cart</button>
      </div>
    </div>
  );
}
export default listItem;

// import BotArmy from "./BotArmy";
// import { useNavigate } from "react-router-dom";

// import { useRef, useState } from "react";
// import { isDisabled } from "@testing-library/user-event/dist/utils";

// function ListItem({ bot }) {
//   console.log(bot);
//   let isEnlisted = useRef();
//   let navigate = useNavigate();

//   console.log(isEnlisted);
//   return <div className="botcollection"></div>;
// }
// export default ListItem;
