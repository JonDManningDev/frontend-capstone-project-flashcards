import { Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";

import { Header } from "./components/common/Header";
import { Home } from "./components/Home";
import { Study } from "./components/Study";

function App() {
  const [decks, setDecks] = useState([]);
  const [deck, setDeck] = useState({});
  const [cards, setCards] = useState([]);

  useEffect(() => {
    async function loadDecks() {
      const response = await fetch("http://mockhost/decks");
      const decks = await response.json();

      setDecks(decks);
    }

    loadDecks();
    console.log(decks);
  }, [decks]);

  async function loadDeck(deckId) {
    try {
      const response = await fetch(`http://mockhost/decks/${deckId}`);
      const deck = await response.json();

      setDeck(deck);
      setCards(deck.cards);
    } catch (error) {
      console.error("Failed to load deck:", error);
    }
  }

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home decks={decks} />} />
        <Route
          path="/decks/:deckId/study"
          element={
            <Study
              decks={decks}
              deck={deck}
              loadDeck={loadDeck}
              cards={cards}
            />
          }
        />
        <Route path="*" element={<p>Not found.</p>} />
      </Routes>
    </>
  );
}

export default App;
