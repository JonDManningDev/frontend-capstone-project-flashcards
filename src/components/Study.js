import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

import { Card } from "./Card";

export function Study() {
  const [deck, setDeck] = useState({});
  const [cards, setCards] = useState([]);
  const [card, setCard] = useState(null);
  const [side, setSide] = useState("front");

  const { deckId } = useParams();

  useEffect(() => {
    async function loadDeck(id) {
      try {
        const response = await fetch(`http://mockhost/decks/${id}`);
        const deckData = await response.json();
        const cardsData = deckData.cards;

        setDeck(deckData);
        setCards(cardsData);
        setCard(cardsData[0]);
      } catch (error) {
        console.error("Error loading deck:", error);
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
            Study
          </li>
        </ol>
      </nav>
    );
  };

  if (!deck) {
    return (
      <p>
        Deck may either be loading or may not exist. Please wait or return{" "}
        <Link to="/">home</Link>...
      </p>
    );
  }

  return (
    <div className="container">
      {breadcrumb()}
      <h2>{`${deck.name}: Study`}</h2>
      <Card
        cards={cards}
        card={card}
        setCard={setCard}
        side={side}
        setSide={setSide}
        deckId={deckId}
      />
    </div>
  );
}
