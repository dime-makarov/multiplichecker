import { useState } from "react";

import "./App.css";
import Equation from "./components/Equation.jsx";
import NumberSelector from "./components/NumberSelector.jsx";

function App() {
    function generateEquations(times) {
        return [
            { baseNum: 2, timesNum: times, answer: "", showResult: false },
            { baseNum: 3, timesNum: times, answer: "", showResult: false },
            { baseNum: 4, timesNum: times, answer: "", showResult: false },
            { baseNum: 5, timesNum: times, answer: "", showResult: false },
            { baseNum: 6, timesNum: times, answer: "", showResult: false },
            { baseNum: 7, timesNum: times, answer: "", showResult: false },
            { baseNum: 8, timesNum: times, answer: "", showResult: false },
            { baseNum: 9, timesNum: times, answer: "", showResult: false },
        ];
    }

    const [equations, setEquations] = useState(generateEquations(2));

    function handleSelectTimesNumber(newTimesNumber) {
        setEquations(generateEquations(newTimesNumber));
    }

    function handleChangeAnswer(index, newValue) {
        setEquations((prevEquations) => {
            const newEquations = [...prevEquations];
            newEquations[index].answer = newValue;
            return newEquations;
        });
    }

    function onCheck() {
        setEquations((prevEquations) => {
            const newEquations = [...prevEquations];
           
            for (const eq of newEquations)
                eq.showResult = true;

            return newEquations;
        });
    }

    return (
        <>
            <NumberSelector onSelect={handleSelectTimesNumber} />
            <section id="equations">
                {equations.map((eq, idx) => (
                    <Equation
                        key={eq[0]}
                        index={idx}
                        equation={eq}
                        onChangeAnswer={handleChangeAnswer}
                    />
                ))}
            </section>
            <button type="button" onClick={onCheck}>
                CHECK
            </button>
        </>
    );
}

export default App;
