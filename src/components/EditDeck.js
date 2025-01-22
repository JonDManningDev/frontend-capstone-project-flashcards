import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";

import { DeckForm } from "./common/DeckForm";

export function EditDeck() {
  const { deckId } = useParams();

  const [deck, setDeck] = useState([]);

  useEffect(() => {
    async function loadDeck(id) {
      try {
        const response = await fetch(`http://mockhost/decks/${id}`);
        const deckData = await response.json();

        setDeck(deckData);
      } catch (error) {
        console.error("There was an error loading the deck:", error);
      }
    }

    loadDeck(deckId);
  }, [deckId]);

  const breadcrumb = () => {
    return (
      <nav aria-label="breadcrumb" className="my-2">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <Link to="/" className="text-decoration-none">
              <i className="bi-house-fill"></i>Home
            </Link>
          </li>
          <li className="breadcrumb-item">
            <Link to={`/decks/${deckId}`} className="text-decoration-none">
              {deck.name}
            </Link>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            Edit Deck
          </li>
        </ol>
      </nav>
    );
  };

  const fetchURL = `http://mockhost/decks/${deckId}`;
  const fetchMethod = "PUT";
  const deckName = deck.name;
  const deckDescription = deck.description;

  return (
    <div className="container">
      {breadcrumb()}
      <h2>Edit Deck</h2>
      <DeckForm
        fetchURL={fetchURL}
        fetchMethod={fetchMethod}
        deckName={deckName}
        deckDescription={deckDescription}
      />
    </div>
  );
}
