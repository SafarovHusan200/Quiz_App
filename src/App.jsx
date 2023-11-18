import "./App.css";
import Quiz from "./Quiz";
import { jsQuiz } from "./constants.js";

function App() {
  return (
    <>
      <Quiz questions={jsQuiz.questions} />
    </>
  );
}

export default App;
