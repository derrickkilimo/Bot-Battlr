import React from "react";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

const ListCollection = ({ bots, sendId }) => {
  if (!bots || bots.length === 0) {
    return <p>No bots available.</p>;
  }

  return (
    <div className="bots">
      {bots.map((bot) => (
        <Col key={bot.id}>
          <Card style={{ padding: "10px" }}>
            <Card.Img variant="top" src={bot.avatar_url} />
            <Card.Body>
              <Card.Title>{bot.name}</Card.Title>
              <Card.Text>
                <p>health: {bot.health}</p>
                <p>damage: {bot.damage}</p>
              </Card.Text>
            </Card.Body>
            <Button
              variant="primary"
              style={{
                width: "50%",
                alignItems: "center",
                margin: "25px",
              }}
              onClick={(e) => sendId(bot.id, e)}
            >
              Enlist
            </Button>
          </Card>
        </Col>
      ))}
    </div>
  );
};

export { ListCollection };
