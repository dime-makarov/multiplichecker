import { useState } from "react";

import './Equation.css';

import check from "../assets/check.png";
import cross from "../assets/cross.png";

export default function Equation({number1, number2, isShowResult}) {
    const [answer, setAnswer] = useState(0);
    const isCorrect = (answer === number1 * number2);
    
    function handleChange(event) {
        setAnswer(+(event.target.value));
    }

    return (
        <div className="equation">
            <span className="number">{number1}</span>
            <span className="sign">&times;</span>
            <span className="number">{number2}</span>
            <span className="sign">=</span>
            <input className="result" type="number" value={answer} onChange={handleChange} />

            {isShowResult && isCorrect && <img className="image-result" src={check} />}
            {isShowResult && !isCorrect && <img className="image-result" src={cross} />}
        </div>
    );
}