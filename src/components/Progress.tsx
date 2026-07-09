import type { ProgressTypes } from "../types/QuizAppTypes";

function Progress({
  index,
  numOfQuestions,
  score,
  maxPossibleScore,
  answer
}: ProgressTypes) {
  return (
    <header className="progress">
      <progress max={numOfQuestions} value={index + Number(answer !== null)}></progress>
      <p>
        Question <strong>{index + 1}</strong>/ {numOfQuestions}
      </p>
      <p>
        <strong>{score}</strong>/ {maxPossibleScore}
      </p>
    </header>
  );
}

export default Progress;
