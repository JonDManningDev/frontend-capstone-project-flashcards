import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export function CardForm({
  fetchURL,
  fetchMethod,
  deckId,
  cardFront,
  cardBack,
}) {
  const navigate = useNavigate();

  const defaultFormState = {
    frontInput: "",
    backInput: "",
  };

  const [formData, setFormData] = useState(defaultFormState);

  useEffect(() => {
    if (cardFront && cardBack) {
      setFormData({
        frontInput: cardFront,
        backInput: cardBack,
      });
    }
  }, [cardFront, cardBack]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  async function handleSubmit(event) {
    try {
      event.preventDefault();
      console.log(
        "User submitted data for a card:",
        formData,
        `Method: ${fetchMethod}`
      );
      const response = await fetch(fetchURL, {
        method: fetchMethod,
        body: {
          front: formData.frontInput,
          back: formData.backInput,
          deckId: deckId,
        },
      });

      if (fetchMethod === "POST") {
        setFormData(defaultFormState);
      } else {
        navigate(`/decks/${deckId}/`);
      }
    } catch (error) {
      console.error("There was an error creating the card:", error);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="my-3">
      <div className="my-2">
        <label htmlFor="frontInput" className="form-label">
          Front side
        </label>
        <textarea
          className="form-control"
          placeholder="Front side of card"
          id="frontInput"
          name="frontInput"
          rows="4"
          value={formData.frontInput}
          onChange={handleChange}
        />
      </div>
      <div className="my-2">
        <label htmlFor="backInput" className="form-label">
          Back side
        </label>
        <textarea
          className="form-control"
          placeholder="Back side of card"
          id="backInput"
          name="backInput"
          rows="4"
          value={formData.backInput}
          onChange={handleChange}
        />
      </div>
      <div className="d-inline-flex">
        <button
          className="btn btn-secondary"
          onClick={() => navigate(`/decks/${deckId}/`)}
        >
          {fetchMethod === "POST" ? "Done" : "Cancel"}
        </button>
        <button className="btn btn-primary mx-2" type="submit">
          Save
        </button>
      </div>
    </form>
  );
}
