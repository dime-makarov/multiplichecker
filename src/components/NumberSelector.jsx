import './NumberSelector.css';

export default function NumberSelector({ onSelect }) {
    const numbers = [2, 3, 4, 5, 6, 7, 8, 9];

    return (
        <section id="number-selector">
            {numbers.map((number) => (
                <button key={number} onClick={() => onSelect(number)}>
                    {number}
                </button>
            ))}
        </section>
    );
}
