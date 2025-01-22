import { Routes, Route } from "react-router-dom";

import { Header } from "./components/common/Header";
import { Home } from "./components/home/Home";
import { Study } from "./components/study/Study";
import { CreateDeck } from "./components/deck-create-edit/CreateDeck";
import { DeckView } from "./components/deck-view/DeckView";
import { EditDeck } from "./components/deck-create-edit/EditDeck";
import { AddCard } from "./components/card-create-edit/AddCard";
import { EditCard } from "./components/card-create-edit/EditCard";

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
        <Route
          path="/decks/:deckId/cards/:cardId/edit"
          element={<EditCard />}
        />
        <Route path="*" element={<p>Not found.</p>} />
      </Routes>
    </>
  );
}

export default App;
