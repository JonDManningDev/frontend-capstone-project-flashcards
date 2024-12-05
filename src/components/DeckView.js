import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";

export function DeckView() {
  const { deckId } = useParams();

  const [deck, setDeck] = useState([]);
  const [cards, setCards] = useState([]);

  useEffect(() => {
    async function loadDeck(id) {
      try {
        const response = await fetch(`http://mockhost/decks/${deckId}`);
        const deckData = await response.json();
        const cardsData = deckData.cards;

        setDeck(deckData);
        setCards(cardsData);

      } catch (error) {
        console.error("There was an error loading the deck:", error);
      };      
    };

    loadDeck(deckId);
  }, [deckId]);

  return (
    <div className="container">
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <Link to="/" className="text-decoration-none">
              <i className="bi-house-fill"></i>Home
            </Link>
          </li>
          <li className="breadcrumb-item active" aria-current="page">{deck.name}</li>
        </ol>
      </nav>
      <div className="card border border-0">
        <div className="card-body">
            <h5 className="card-title">{deck.name}</h5>
            <p className="card-text">{deck.description}</p>
            <div className="d-inline-flex">
                <button className="btn btn-secondary me-2"><i className="bi-pencil"></i>{` Edit`}</button>
                <button className="btn btn-primary me-2"><i className="bi-book"></i>{` Study`}</button>
                <button className="btn btn-primary me-2">+ Add Cards</button>
                <button className="btn btn-danger me-2"><i className="bi-trash"></i></button>
            </div>
        </div>
      </div>
    </div>
  );
}
