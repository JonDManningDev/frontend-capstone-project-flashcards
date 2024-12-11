import { useNavigate, Link } from "react-router-dom";

export function CardView({ cards, card, setCard, side, setSide, deckId }) {
  const navigate = useNavigate();

  const flipHandler = () => {
    side === "front" ? setSide("back") : setSide("front");
  };

  const nextHandler = () => {
    const nextCard = cards.find((element) => element.id === card.id + 1);

    if (!nextCard) {
      const message =
        "Restart cards?\n\nClick 'cancel' to return to the home page.";
      const resetHandler = () => {
        setCard(cards[0]);
        setSide("front");
      };
      if (window.confirm(message)) {
        resetHandler();
      } else {
        navigate("/");
      }
    } else {
      setCard(nextCard);
      setSide("front");
    }
  };

  const cardContents = (side) => {
    if (cards.length < 3) {
      return (
        <>
          <h5 className="card-title">Not enough cards.</h5>
          <p className="card-text">You need at least 3 cards to study.</p>
          <button
            className="btn btn-primary"
            onClick={() => navigate(`/decks/${deckId}/cards/new`)}
          >
            + Add Cards Now
          </button>
        </>
      );
    }

    if (side === "front") {
      return (
        <>
          <h5 className="card-title">{`Card ${card.id} of ${cards.length}`}</h5>
          <p className="card-text">
            <strong>{`Q: `}</strong>
            {card.front}
          </p>
          <button className="btn btn-secondary" onClick={() => flipHandler()}>
            Flip
          </button>
        </>
      );
    } else {
      return (
        <>
          <h5 className="card-title">{`Card ${card.id} of ${cards.length}`}</h5>
          <p className="card-text">
            <strong>{`A: `}</strong>
            {card.back}
          </p>
          <button className="btn btn-secondary" onClick={() => flipHandler()}>
            Flip
          </button>
          <button className="btn btn-primary" onClick={() => nextHandler()}>
            Next
          </button>
        </>
      );
    }
  };

  if (!cards) {
    return <p>Cards may either be loading or may not extist. Please wait or return <Link to="/">home</Link>...</p>;
  }

  return (
    <div className="card">
      <div className="card-body">{cardContents(side)}</div>
    </div>
  );
}
