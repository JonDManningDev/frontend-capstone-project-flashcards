import { DeckListing } from "./DeckListing";

export function DeckList({ decks }) {

    const deckList = decks.map((deck) => (
        <DeckListing key={deck.id} name={deck.name} description={deck.description} id={deck.id} size={deck.cards.length} />
    ));

    return (
        <div className="container my-2">
            {deckList}
        </div>
    );
};