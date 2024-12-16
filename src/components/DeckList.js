import { DeckListing } from "./DeckListing";

export function DeckList({ decks, loadDecks, setDecks }) {

    const deckList = decks.map((deck) => (
        <DeckListing key={deck.id} name={deck.name} description={deck.description} id={deck.id} size={deck.cards.length} deck={deck} />
    ));

    return (
        <div className="container my-2">
            {deckList}
        </div>
    );
};