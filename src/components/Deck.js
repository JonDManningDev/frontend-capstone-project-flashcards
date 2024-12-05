import { useNavigate } from "react-router-dom";

export function Deck({ name, description, id, size }) {

  const navigate = useNavigate();

  const studyHandler = (id) => {
    navigate(`/decks/${id}/study`);
  };

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
        <button className="btn btn-secondary">
          <i className="bi-eye"></i>
          {` View`}
        </button>
        <button className="btn btn-primary mx-2" onClick={() => studyHandler(id)}>
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
