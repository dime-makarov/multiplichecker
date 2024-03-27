import Equation from "./Equation.jsx";

export default function Equations({ equations, onChangeAnswer }) {
    return (
        <section id="equations">
            {equations.map((eq, idx) => (
                <Equation
                    key={idx}
                    index={idx}
                    equation={eq}
                    onChangeAnswer={onChangeAnswer}
                />
            ))}
        </section>
    );
}