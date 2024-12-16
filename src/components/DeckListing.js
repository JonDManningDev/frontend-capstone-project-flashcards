import { useNavigate } from "react-router-dom";

export function DeckListing({ name, description, id, size, deck }) {
  const navigate = useNavigate();

  async function handleDelete(id) {
    const message = "Delete this deck?\n\nYou will not be able to recover it.";
    if (window.confirm(message)) {
      try {
        const response = await fetch(`http://mockhost/decks/${id}`, {
          method: "DELETE",
        });

        console.log("User deleted the following deck:", deck);

        navigate("/");
      } catch (error) {
        console.error("Error deleting deck:", error);
      }
    } else {
      navigate("/");
    }
  }

  return (
    <div className="container py-4 border rounded">
      <div className="row">
        <div className="col">
          <h4>{name}</h4>
        </div>
        <div className="col text-end">
          <p className="text-secondary">{`${size} cards`}</p>
        </div>
      </div>
      <p>{description}</p>
      <div className="d-inline-flex">
        <button
          className="btn btn-secondary"
          onClick={() => navigate(`/decks/${id}`)}
        >
          <i className="bi-eye"></i>
          {` View`}
        </button>
        <button
          className="btn btn-primary mx-2"
          onClick={() => navigate(`/decks/${id}/study`)}
        >
          <i className="bi-book"></i>
          {` Study`}
        </button>
        <button className="btn btn-danger" onClick={() => handleDelete(id)}>
          <i className="bi-trash"></i>
        </button>
      </div>
    </div>
  );
}
