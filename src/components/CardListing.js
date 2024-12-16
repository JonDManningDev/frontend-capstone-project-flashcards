import { useNavigate } from "react-router-dom";

export function CardListing({ card, deck }) {
  const navigate = useNavigate();

  async function handleDeleteCard(cardId) {
    const message = "Delete this card?\n\nYou will not be able to recover it.";
    if (window.confirm(message)) {
      try {
        const response = await fetch(
          `http://mockhost/decks/${deck.id}/cards/${cardId}`,
          {
            method: "DELETE",
          }
        );
        console.log("User deleted the following card:", card);
        navigate(`/decks/${deck.id}`);
      } catch (error) {
        console.error(
          `There was an error deleting cards with id of ${cardId}:`,
          error
        );
      }
    } else {
      navigate(`/decks/${deck.id}`);
    }
  }

  return (
    <tr>
      <td>{card.front}</td>
      <td>{card.back}</td>
      <td className="d-inline-flex">
        <button
          className="btn btn-secondary d-inline-flex"
          onClick={() => navigate(`/decks/${deck.id}/cards/${card.id}/edit`)}
        >
          <i className="bi-pencil me-2"></i>Edit
        </button>
        <button
          className="btn btn-danger ms-2"
          onClick={() => handleDeleteCard(card.id)}
        >
          <i className="bi-trash"></i>
        </button>
      </td>
    </tr>
  );
}
