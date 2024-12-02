import { DeckList } from "./DeckList";

export function Home({ decks }) {
    return(
        <div className="container">
            <button className="btn btn-secondary my-3">+ Create Deck</button>
            <DeckList decks={decks} />
        </div>
    )
}