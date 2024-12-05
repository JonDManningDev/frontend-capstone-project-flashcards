import { useNavigate } from "react-router-dom";

export function DeckListing({ name, description, id, size }) {

  const navigate = useNavigate();

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
        <button className="btn btn-secondary" onClick={() => navigate(`/decks/${id}`)}>
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
        <button className="btn btn-danger">
          <i className="bi-trash"></i>
        </button>
      </div>
    </div>
  );
}
