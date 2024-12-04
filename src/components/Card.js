export function Card({ cards, card, setCard, side, setSide }) {
    const cardTotal = cards.length;

    return (
        <div className="card">
            <div className="card-body">
                <h5 className="card-title">{`Card ${card.id} of ${cardTotal}`}</h5>
            </div>
        </div>
    );
}