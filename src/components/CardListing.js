import { useNavigate } from "react-router-dom";

export function CardListing({ card, deck }) {

    const navigate = useNavigate();
    
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
          <button className="btn btn-danger ms-2">
            <i className="bi-trash"></i>
          </button>
        </td>
      </tr>
    );
};