import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { NavBar } from "./common/NavBar";
import { Card } from "./Card";

export function Study({ deck, loadDeck, cards }) {

    const { deckId } = useParams();
    useEffect(() => {
        
        loadDeck(deckId);
        console.log(deck);
           
    }, [deckId]);

    if(!deck.id) {
        return <p>Loading...</p>
    }

    const [card, setCard] = useState(null);
    const [side, setSide] = useState("front");

    useEffect(() => {
        if (cards.length > 0) {
            setCard(cards[0]);
        }
    }, [cards])

    return (
        <>
            <NavBar />
            <h2>React: Study</h2>
            <Card cards={cards} card={card} setCard={setCard} side={side} setSide={setSide} />
        </>
    );
}