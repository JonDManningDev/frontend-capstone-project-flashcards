import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { NavBar } from "./common/NavBar";
import { Card } from "./Card";

export function Study() {

    const [deck, setDeck] = useState({});
    const [card, setCard] = useState(null);
    const [side, setSide] = useState("front");

    const { deckId } = useParams();

    useEffect(() => {
        async function loadDeck(id) {
            const response = await fetch(`http://mockhost/decks/${id}`);
            const deckData = await response.json();

            setDeck(deckData);
        }

        loadDeck(deckId);

    }, [deckId]);

    if(!deck.id) {
        return <p>Loading...</p>
    }

    

    return (
        <>
            <NavBar />
            <h2>{`${deck.name}: Study`}</h2>
            <Card />
        </>
    );
}