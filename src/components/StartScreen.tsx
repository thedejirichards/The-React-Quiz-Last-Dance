import type { StartScreenType } from "../types/QuizAppTypes";

function StartScreen({ numOfQuestions, dispatch }: StartScreenType) {
  const handleClick = () => dispatch({ type: "start" });
  return (
    <div className="start">
      <h2>Welcome to the React Quiz!</h2>
      <h3>{numOfQuestions} questions to test your react mastery</h3>
      <button className="btn btn-ui" onClick={handleClick}>
        Let's start
      </button>
    </div>
  );
}

export default StartScreen;
