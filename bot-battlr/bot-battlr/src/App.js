import React, { useEffect, useState } from "react";
import "./App.css";
import { ListCollection } from "./components/ListCollection";
import BotArmy from "./components/BotArmy";
import { Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar"; // Correct import path for NavBarComp

function App() {
  const [Bots, setBots] = useState([]);
  const [Enlistedbot, setEnlistedbot] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8001/bots")
      .then((res) => res.json())
      .then((data) => setBots(data))
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  function handleEnlist(botId, e) {
    e.preventDefault(); // Prevent default behavior of the button
    if (!Enlistedbot.some((bot) => bot.id === botId)) {
      const selectedBot = Bots.find((bot) => bot.id === botId);
      setEnlistedbot([...Enlistedbot, selectedBot]);
      alert("Bot added successfully");
    } else {
      alert("Bot is already enlisted");
    }
  }

  function handleRelease(botId) {
    const updatedEnlistedbot = Enlistedbot.filter((bot) => bot.id !== botId);
    setEnlistedbot(updatedEnlistedbot);
  }

  function handleDelete(botId) {
    const updatedBots = Bots.filter((bot) => bot.id !== botId);
    const updatedEnlistedbot = Enlistedbot.filter((bot) => bot.id !== botId);
    setBots(updatedBots);
    setEnlistedbot(updatedEnlistedbot);

    fetch(`http://localhost:8001/bots/${botId}`, {
      method: "DELETE",
    }).then(() => {
      alert("Bot deleted");
    });
  }

  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route
          path="/BotArmy"
          element={<BotArmy data={Enlistedbot} handleDelist={handleRelease} />}
        />
        <Route
          path="/Army"
          element={<ListCollection bots={Bots} sendId={handleEnlist} />}
        />
      </Routes>
    </div>
  );
}

export default App;
