import { Link, useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

import { CardList } from "./CardList";

export function DeckView() {
  const navigate = useNavigate();
  const { deckId } = useParams();

  const [deck, setDeck] = useState([]);
  const [cards, setCards] = useState([]);

  useEffect(() => {
    async function loadDeck(id) {
      try {
        const response = await fetch(`http://mockhost/decks/${id}`);
        const deckData = await response.json();
        const cardsData = deckData.cards;

        setDeck(deckData);
        setCards(cardsData);
      } catch (error) {
        console.error("There was an error loading the deck:", error);
      }
    }

    loadDeck(deckId);
  }, [deckId]);

  async function handleDeleteDeck() {
    const message = "Delete this deck?\n\nYou will not be able to recover it.";
    if (window.confirm(message)) {
      try {
        const response = await fetch(`http://mockhost/decks/${deckId}`, {
          method: "DELETE",
        });
        console.log("User deleted the following deck:", deck);
        navigate("/");
      } catch (error) {
        console.error(
          `There was an error deleting deck with id of ${deckId}:`,
          error
        );
      }
    } else {
      navigate(`/decks/${deckId}`);
    }
  }

  if (!deck)
    return (
      <p>
        Deck may either be loading or may not extist. Please wait or return{" "}
        <Link to="/">home</Link>...
      </p>
    );

  return (
    <div className="container">
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <Link to="/" className="text-decoration-none">
              <i className="bi-house-fill"></i>Home
            </Link>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            {deck.name}
          </li>
        </ol>
      </nav>
      <div className="card border border-0">
        <div className="card-body">
          <h5 className="card-title">{deck.name}</h5>
          <p className="card-text">{deck.description}</p>
          <div className="d-inline-flex">
            <button
              className="btn btn-secondary me-2"
              onClick={() => navigate(`/decks/${deck.id}/edit`)}
            >
              <i className="bi-pencil"></i>
              {` Edit`}
            </button>
            <button
              className="btn btn-primary me-2"
              onClick={() => navigate(`/decks/${deck.id}/study`)}
            >
              <i className="bi-book"></i>
              {` Study`}
            </button>
            <button
              className="btn btn-primary me-2"
              onClick={() => navigate(`/decks/${deck.id}/cards/new`)}
            >
              + Add Cards
            </button>
            <button
              className="btn btn-danger me-2"
              onClick={() => handleDeleteDeck()}
            >
              <i className="bi-trash"></i>
            </button>
          </div>
        </div>
      </div>
      <CardList cards={cards} deck={deck} />
    </div>
  );
}
