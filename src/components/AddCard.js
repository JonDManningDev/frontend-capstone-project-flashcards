import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";

import { CardForm } from "./CardForm";

export function AddCard() {
  const { deckId } = useParams();

  const [deck, setDeck] = useState({});

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
            Add Card
          </li>
        </ol>
      </nav>
    );
  };

  const fetchURL = `http://mockhost/decks/${deckId}/cards`;
  const fetchMethod = "POST";

  return (
    <div className="container">
      {breadcrumb()}
      <h2>Create Card</h2>
      <CardForm fetchURL={fetchURL} fetchMethod={fetchMethod} deckId={deckId} />
    </div>
  );
}
