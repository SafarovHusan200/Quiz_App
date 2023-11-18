import { useState } from "react";
import { resultInitialState } from "./constants.js";

const Quiz = ({ questions }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);

  const { question, choices, correctAnswer } = questions[currentQuestion];
  const [answerIdx, setAnswerIdx] = useState(null);
  const [answer, setAnswer] = useState(null);
  const [result, setResult] = useState(resultInitialState);
  const [showResult, setShowResult] = useState(false);

  const onAnswerClick = async (ans, index) => {
    setAnswerIdx(index);
    if (ans === correctAnswer) {
      setAnswer(true);
    } else {
      setAnswer(false);
    }
  };

  const onClickNext = () => {
    setAnswerIdx(null);
    console.log(answer);
    setResult((prev) => {
      return answer
        ? {
            ...prev,
            score: prev.score + 5,
            correctAnswers: prev.correctAnswers + 1,
          }
        : {
            ...prev,
            wrongAnswers: prev.wrongAnswers + 1,
          };
    });

    if (currentQuestion !== questions.length - 1) {
      setCurrentQuestion((prev) => prev + 1);
    } else {
      setCurrentQuestion(0);
      setShowResult(true);
    }
  };

  const onAgain = () => {
    setShowResult(false);
    setResult(resultInitialState);
  };

  return (
    <div className="quiz-container">
      {!showResult ? (
        <>
          <span className="active-question-no">{currentQuestion + 1}</span>
          <span className="total-question">/{questions.length}</span>
          <h2>{question}</h2>

          <ul>
            {choices?.map((answer, index) => (
              <li
                className={answerIdx == index ? "selected-answer" : null}
                onClick={() => onAnswerClick(answer, index)}
                key={answer}
              >
                {answer}
              </li>
            ))}
          </ul>

          <div className="footer">
            <button
              className="btn"
              onClick={onClickNext}
              disabled={answerIdx === null}
            >
              {currentQuestion === questions.length - 1 ? "Finish" : "Next"}
            </button>
          </div>
        </>
      ) : (
        <div className="result">
          <h3>Natijalar</h3>
          <p>Ishtirokingiz uchun rahmat!😎</p>
          <p>
            Umumiy savollar: <span>{questions.length}</span>
          </p>
          <p>
            To'plagan balingiz: <span>{result.score}</span>
          </p>
          <p>
            To'g'ri javoblar: <span>{result.correctAnswers}</span>
          </p>
          <p>
            Xato javoblar: <span>{result.wrongAnswers}</span>
          </p>

          <button className="btn" onClick={onAgain}>
            Qayta ishlash
          </button>
        </div>
      )}
    </div>
  );
};

export default Quiz;
