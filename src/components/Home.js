import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

import { DeckList } from "./DeckList";

export function Home() {
  const navigate = useNavigate();

  const [decks, setDecks] = useState([]);

  async function loadDecks() {
    try {
        const response = await fetch("http://mockhost/decks");
        const decks = await response.json();

        setDecks(decks);
    } catch (error) {
        console.error("There was an error in loading decks:", error);
    }
  }

  useEffect(() => {
    loadDecks();
  }, []);

  return (
    <div className="container">
      <button
        className="btn btn-secondary my-3"
        onClick={() => navigate("/decks/new")}
      >
        + Create Deck
      </button>
      <DeckList decks={decks} />
    </div>
  );
}
