import type { QuestionType } from "../types/QuizAppTypes";
import Option from "./Option";

function Question({ currentQuestion, dispatch, answer, score }: QuestionType) {
  return (
    <div>
      <h4>{currentQuestion.question}</h4>
      <Option currentQuestion={currentQuestion} dispatch={dispatch} answer={answer} score={score}/>
    </div>
  );
}

export default Question;
