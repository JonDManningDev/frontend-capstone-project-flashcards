import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export function DeckForm({ fetchURL, fetchMethod, deckName, deckDescription }) {
  const navigate = useNavigate();

  const [formData, setFormData] = useState(
    {
    name: "",
    description: "",
  });


  useEffect(() => {
    if(deckName && deckDescription) {
        setFormData({
          name: deckName,
          description: deckDescription
        });
      };
  }, [deckName, deckDescription]);

  

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
        "User submitted data for a deck:",
        formData,
        `Method: ${fetchMethod}`
      );
      const response = await fetch(fetchURL, {
        method: fetchMethod,
        body: {
          name: formData.name,
          description: formData.description,
          cards: [],
        },
      });
      const newDeck = await response.json();
      navigate(`/decks/${newDeck.id}`);
    } catch (error) {
      console.error("There was an error creating the deck:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="my-3">
      <div className="my-2">
        <label htmlFor="name" className="form-label">
          Name
        </label>
        <input
          type="text"
          className="form-control"
          placeholder="Deck Name"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
      </div>
      <div className="my-2">
        <label htmlFor="description" className="form-label">
          Description
        </label>
        <textarea
          className="form-control"
          placeholder="Brief description of the deck"
          id="description"
          name="description"
          rows="4"
          value={formData.description}
          onChange={handleChange}
        />
      </div>
      <div className="d-inline-flex">
        <button className="btn btn-secondary" onClick={() => navigate("/")}>
          Cancel
        </button>
        <button className="btn btn-primary mx-2" type="submit">
          Submit
        </button>
      </div>
    </form>
  );
}
