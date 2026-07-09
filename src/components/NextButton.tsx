import type { NextButtonType } from "../types/QuizAppTypes";

function NextButton({
  dispatch,
  answer,
  index,
  numOfQuestions,
  score
}: NextButtonType) {
  if (index < numOfQuestions - 1)
    return (
      <>
        {answer !== null && (
          <button
            className="btn btn-ui"
            onClick={() => dispatch({ type: "nextQuestion" })}
          >
            Next
          </button>
        )}
      </>
    );
  if (index === numOfQuestions - 1)
    return (
      <>
        {answer !== null && (
          <button
            className="btn btn-ui"
            onClick={() => dispatch({ type: "finish", payload: score })}
          >
            Finish
          </button>
        )}
      </>
    );
}

export default NextButton;
