import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function BotArmy({ data, handleDelist }) {
  if (!data || data.length === 0) {
    return <p>Your bot army is empty.</p>;
  }

  return (
    <div style={{ display: "flex", flexWrap: "wrap" }}>
      {data.map((bot) => (
        <Card key={bot.id} style={{ width: "250px", margin: "10px" }}>
          <Card.Img variant="top" src={bot.avatar_url} />
          <Card.Body>
            <Card.Text>
              <p>Health: {bot.health}</p>
              <p>Damage: {bot.damage}</p>
              <p>Armor: {bot.armor}</p>
              <p>Class: {bot.bot_class}</p>
              <p>Catchphrase: {bot.catchphrase}</p>
              <p>Created at: {bot.created_at}</p>
            </Card.Text>
            <Button variant="danger" onClick={() => handleDelist(bot.id)}>
              Delist
            </Button>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
}

export default BotArmy;
