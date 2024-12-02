import { Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";

import { Header } from "./components/common/Header";
import { Home } from "./components/Home";





function App() {
  
  const [decks, setDecks] = useState([]);

  useEffect(() => {
  async function loadDecks() {
    const response = await fetch("http://mockhost/decks");
    const decks = await response.json();
    setDecks(decks);
  }

  loadDecks();
  console.log(decks);

  }, [decks]);

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home decks={decks} />} />
        <Route path="*" element={<p>Not found.</p>} />
      </Routes>
    </>
  );
}

export default App;
