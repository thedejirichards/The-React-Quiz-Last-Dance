import type { OptionType } from "../types/QuizAppTypes";

function Option({ currentQuestion, dispatch, answer }: OptionType) {
  const hasAnswered = answer !== null;

  return (
    <div className="options">
      {currentQuestion.options.map((option, index) => (
        <button
          className={`btn btn-option 
            ${index === answer ? "answer" : ""} 
          ${
            hasAnswered
              ? index === currentQuestion.correctOption
                ? `correct`
                : `wrong`
              : ""
          }`}
          disabled={hasAnswered}
          key={option}
          onClick={() =>
            dispatch({
              type: "newAnswer",
              payload: {
                index,
                questionScore:
                  index === currentQuestion.correctOption
                    ? currentQuestion.points
                    : 0,
              },
            })
          }
        >
          {option}
        </button>
      ))}
    </div>
  );
}

export default Option;
