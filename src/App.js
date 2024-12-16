import { Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";

import { Header } from "./components/common/Header";
import { Home } from "./components/Home";
import { Study } from "./components/Study";
import { CreateDeck } from "./components/CreateDeck";
import { DeckView } from "./components/DeckView";
import { EditDeck } from "./components/EditDeck";
import { AddCard } from "./components/AddCard";
import { EditCard } from "./components/EditCard";

function App() {  

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/decks/:deckId/study" element={<Study />} />
        <Route path="/decks/new" element={<CreateDeck />} />
        <Route path="/decks/:deckId" element={<DeckView />} />
        <Route path="/decks/:deckId/edit" element={<EditDeck />} />
        <Route path="/decks/:deckId/cards/new" element={<AddCard />} />
        <Route path="/decks/:deckId/cards/:cardId/edit" element={<EditCard />} />
        <Route path="*" element={<p>Not found.</p>} />
      </Routes>
    </>
  );
}

export default App;
