export function Deck({ name, description, id, size }) {
  return (
    <div className="container my-4">
      <div className="row">
        <div className="col">
          <h4>{name}</h4>
        </div>
        <div className="col">
          <p className="text-secondary">{`${size} cards`}</p>
        </div>
      </div>
      <p>{description}</p>
      <div className="d-inline-flex">
        <button className="btn btn-secondary">
          <i className="bi-eye"></i>
          {` View`}
        </button>
        <button className="btn btn-primary mx-2">
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
