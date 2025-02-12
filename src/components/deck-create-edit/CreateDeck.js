import { Link } from "react-router-dom";

import { DeckForm } from "./DeckForm";

export function CreateDeck() {
  const fetchURL = "http://mockhost/decks";
  const fetchMethod = "POST";

  const breadcrumb = () => {
    return (
      <nav aria-label="breadcrumb" className="my-2">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <Link to="/" className="text-decoration-none">
              <i className="bi-house-fill"></i>Home
            </Link>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            Create Deck
          </li>
        </ol>
      </nav>
    );
  };

  return (
    <div className="container">
      {breadcrumb()}
      <h2>Create Deck</h2>
      <DeckForm fetchURL={fetchURL} fetchMethod={fetchMethod} />
    </div>
  );
}
