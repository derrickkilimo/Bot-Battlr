import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';


function ListItem({ bot }) {
  // Use state to manage whether the bot is enlisted
  const [isEnlisted, setIsEnlisted] = useState(false);

  const navigate = useNavigate();

  const handleEnlistClick = () => {
    // Perform enlistment logic here
    // Example: setIsEnlisted(!isEnlisted);
  };

  const handleDetailsClick = () => {
    // Navigate to the details page
    // Example: navigate(`/details/${bot.id}`);
  };

  return (
    <div className='botcollection'>
      <h2>{bot.name}</h2>
      <p>Health: {bot.health}</p>
      <p>Damage: {bot.damage}</p>
      {/* Render buttons */}
      <button onClick={handleEnlistClick}>
        {isEnlisted ? 'Disenlist' : 'Enlist'}
      </button>
      <button onClick={handleDetailsClick}>Details</button>
    </div>
  );
}

export default ListItem;
