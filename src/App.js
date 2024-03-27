import { useState } from "react";

import "./App.css";
import Equations from "./components/Equations.jsx";
import NumberSelector from "./components/NumberSelector.jsx";
import BottomControls from "./components/BottomControls.jsx";

function App() {

    // From: https://stackoverflow.com/a/2450976/2652904
    function shuffle(array) {
        let currentIndex = array.length, randomIndex;

        // While there remain elements to shuffle.
        while (currentIndex > 0) {

            // Pick a remaining element.
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex--;

            // And swap it with the current element.
            [array[currentIndex], array[randomIndex]] = [
                array[randomIndex], array[currentIndex]];
        }

        return array;
    }

    function generateEquations(times) {
        const equations = [
            { baseNum: 2, timesNum: times, answer: "", showResult: false },
            { baseNum: 3, timesNum: times, answer: "", showResult: false },
            { baseNum: 4, timesNum: times, answer: "", showResult: false },
            { baseNum: 5, timesNum: times, answer: "", showResult: false },
            { baseNum: 6, timesNum: times, answer: "", showResult: false },
            { baseNum: 7, timesNum: times, answer: "", showResult: false },
            { baseNum: 8, timesNum: times, answer: "", showResult: false },
            { baseNum: 9, timesNum: times, answer: "", showResult: false },
        ];

        return shuffle(equations);
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

    function handleCheck() {
        setEquations((prevEquations) => {
            const newEquations = [...prevEquations];

            for (const eq of newEquations)
                eq.showResult = true;

            return newEquations;
        });
    }

    return (
        <div id="main-area">
            <NumberSelector onSelect={handleSelectTimesNumber} />
            <Equations equations={equations} onChangeAnswer={handleChangeAnswer} />
            <BottomControls onCheck={handleCheck} />
        </div>
    );
}

export default App;
