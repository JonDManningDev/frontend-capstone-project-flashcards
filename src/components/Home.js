import { useNavigate } from "react-router-dom";

import { DeckList } from "./DeckList";

export function Home({ decks }) {

    const navigate = useNavigate();

    return(
        <div className="container">
            <button className="btn btn-secondary my-3" onClick={() => navigate("/decks/new")}>+ Create Deck</button>
            <DeckList decks={decks} />
        </div>
    )
}