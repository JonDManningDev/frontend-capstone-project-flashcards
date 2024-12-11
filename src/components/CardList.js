import { CardListing } from "./CardListing";

export function CardList({ cards, deck }) {

     const rows = cards.map((card) => {
       return (
         <CardListing card={card} deck={deck} />
       );
     });

    return (
      <div className="mt-2">
        <h2>Cards</h2>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Front/Question</th>
              <th scope="col">Back/Answer</th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>{rows}</tbody>
        </table>
      </div>
    );
}