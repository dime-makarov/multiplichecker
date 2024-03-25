import "./Equation.css";

import check from "../assets/check.png";
import cross from "../assets/cross.png";
import question from "../assets/question.png";

export default function Equation({ index, equation, onChangeAnswer }) {
    const numericAnswer = equation.answer.length === 0 ? 0 : +equation.answer;
    const isCorrect = numericAnswer === equation.baseNum * equation.timesNum;

    return (
        <div className="equation">
            <span className="number">{equation.baseNum}</span>
            <span className="sign">&times;</span>
            <span className="number">{equation.timesNum}</span>
            <span className="sign">=</span>

            <input
                className="result"
                type="number"
                max={99}
                value={equation.answer}
                disabled={equation.showResult}
                onChange={(event) => onChangeAnswer(index, event.target.value)}
            />

            <span className="sign">&nbsp;</span>

            {!equation.showResult && (
                <img className="image-result" src={question} alt="?" />
            )}

            {equation.showResult && isCorrect && (
                <img className="image-result" src={check} alt="Correct" />
            )}
            {equation.showResult && !isCorrect && (
                <img className="image-result" src={cross} alt="Wrong" />
            )}
        </div>
    );
}
