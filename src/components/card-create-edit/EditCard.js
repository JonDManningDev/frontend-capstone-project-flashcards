import { Link, useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

import { CardForm } from "./CardForm";

export function EditCard() {
  const navigate = useNavigate();

  const { deckId, cardId } = useParams();

  const [deck, setDeck] = useState({});
  const [card, setCard] = useState({});

  useEffect(() => {
    async function loadDeck(deckId) {
      try {
        const deckResponse = await fetch(`http://mockhost/decks/${deckId}`);
        const deckData = await deckResponse.json();

        setDeck(deckData);
      } catch (error) {
        console.error("There was an error loading the deck:", error);
        navigate("/");
      }
    }
    async function loadCard(deckId, cardId) {
      try {
        const cardResponse = await fetch(
          `http://mockhost/decks/${deckId}/cards/${cardId}`
        );
        const cardData = await cardResponse.json();

        setCard(cardData);
      } catch (error) {
        console.error("There was an error loading the card:", error);
        navigate(`/decks/${deckId}`);
      }
    }

    loadDeck(deckId);
    loadCard(deckId, cardId);
  }, [deckId, cardId]);

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
            {`Edit Card ${card.id}`}
          </li>
        </ol>
      </nav>
    );
  };

  const fetchURL = `http://mockhost/decks/${deckId}/cards/${cardId}`;
  const fetchMethod = "PUT";
  const cardFront = card.front;
  const cardBack = card.back;

  return (
    <div className="container">
      {breadcrumb()}
      <h2>Edit Card</h2>
      <CardForm
        fetchURL={fetchURL}
        fetchMethod={fetchMethod}
        deckId={deckId}
        cardFront={cardFront}
        cardBack={cardBack}
      />
    </div>
  );
}
