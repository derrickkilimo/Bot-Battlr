// import React from 'react';
// import Button from 'react-bootstrap/Button';
// import Card from 'react-bootstrap/Card';

// function BotArmy({ data, handleDelist }) {
//   if (!data || data.length === 0) {
//     return <p>No bots available.</p>;
//   }
//   return (
//     <div style={{ float: "right", position: "absolute", top: "70px", display: 'flex', width: "100%" }}>
//       {data != null ?
//         (data.map(mydata => (
//           <Card key={mydata[0].id} style={{ display: 'flex', flexDirection: "column", width: "250px", justifyContent: "flex-end", margin: "10px" }}>
            // <Card.Img variant="top" src={mydata[0].avatar_url} />
            // <Card.Body>
            //   <Card.Text>
            //     <p> health :{mydata[0].health}</p>
            //     <p> Damage :{mydata[0].damage}</p>
            //     <p> armor :{mydata[0].armor}</p>
            //     <p> class :{mydata[0].bot_class}</p>
            //     <p> catchphrase :{mydata[0].catchphrase}</p>
            //     <p>created at "<span>{mydata[0].created_at}</span>"</p>
            //   </Card.Text>
//               <Button variant="danger" id={mydata[0].id} onClick={() => {
//                 handleDelist(mydata[0].id);
//               }}>Delist</Button>
//             </Card.Body>
//           </Card>
//         ))) : (<p>nothing has been listed</p>)
//       }
//     </div>
//   );
// }

// export default BotArmy;

import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function BotArmy({ data, handleDelist }) {
  if (!data || data.length === 0) {
    return <p>Your bot army is empty.</p>;
  }

  return (
    <div style={{ display: 'flex', flexWrap: 'wrap' }}>
      {data.map(bot => (
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
            <Button variant="danger" onClick={() => handleDelist(bot.id)}>Delist</Button>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
}

export default BotArmy;



