import "./BottomControls.css"

export default function BottomControls({ onCheck }) {
    return (
        <section id="bottom-controls">
            <button id="button-check" type="button" onClick={onCheck}>
                CHECK
            </button>
        </section>
    );
}