import { useState } from "react";

import "./App.css";
import Equation from "./components/Equation.jsx";
import NumberSelector from "./components/NumberSelector.jsx";

function App() {

    function generateEquations(number) {
        return [
            [2, number],
            [3, number],
            [4, number],
            [5, number],
            [6, number],
            [7, number],
            [8, number],
            [9, number]
        ];
    }

    const [number, setNumber] = useState(2);
    const [isShowResult, setIsShowResult] = useState(false);
    const equations = generateEquations(number);

    function onSelectNumber(number) {
        setNumber(number);
        setIsShowResult(false);
    }

    function onCheck() {
        setIsShowResult(true);
    }

    return (
        <>
            <NumberSelector onSelect={onSelectNumber} />
            <section id="equations">
                {equations.map((eq) => (
                    <Equation key={eq[0]} number1={eq[0]} number2={eq[1]} isShowResult={isShowResult} />
                ))}
            </section>
            <button type="button" onClick={onCheck}>CHECK</button>
        </>
    );
}

export default App;
