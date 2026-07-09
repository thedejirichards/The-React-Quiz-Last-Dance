// import DateCounter from "./DateCounter"
import { useEffect, useReducer } from "react";
import Header from "./Header";
import "../index.css";
import MainComponent from "./MainComponent";
import type { reducerType, stateType } from "../types/QuizAppTypes";
import Loader from "./Loader";
import ErrorMessage from "./Error";
import StartScreen from "./StartScreen";
import Question from "./Question";
import NextButton from "./NextButton";
import Progress from "./Progress";
import FinishScreen from "./FinishScreen";
import Footer from "./Footer";
import Timer from "./Timer";

const SEC_PER_QUESTIONS = 30;
const initialState: stateType = {
  questions: [],
  status: "loading",
  index: 0,
  answer: null,
  score: 0,
  highScore: 0,
  secondsRemaining: null,
};

const reducer = (state: stateType, action: reducerType) => {
  switch (action.type) {
    case "questionLoaded":
      return { ...state, questions: action.payload, status: "ready" };
    case "dataFailed":
      return { ...state, status: "error" };
    case "start":
      return {
        ...state,
        status: "active",
        secondsRemaining: state.questions.length * SEC_PER_QUESTIONS,
      };
    case "newAnswer":
      return {
        ...state,
        answer: action.payload.index,
        score: state.score + action.payload.questionScore,
      };
    case "nextQuestion":
      return { ...state, answer: null, index: state.index + 1 };
    case "finish":
      return {
        ...state,
        answer: null,
        status: "finished",
        highScore:
          state.highScore > action.payload ? state.highScore : action.payload,
      };
    case "restart":
      return { ...state, status: "ready", index: 0, answer: null, score: 0 };
    case "tick":
      return {
        ...state,
        secondsRemaining: state.secondsRemaining
          ? state.secondsRemaining - 1
          : state.secondsRemaining,
        status: state.secondsRemaining === 0 ? "finished" : state.status,
      };
    default:
      throw new Error("Action Unknown");
  }
};

function App() {
  const [
    { questions, status, index, answer, score, highScore, secondsRemaining },
    dispatch,
  ] = useReducer(reducer, initialState);
  const numOfQuestions = questions.length;
  const maxPossibleScore = questions.reduce(
    (acc, curr) => acc + curr.points,
    0,
  );
  useEffect(() => {
    const questions = async () => {
      try {
        const resp = await fetch(`http://localhost:8000/questions`);
        const data = await resp.json();
        dispatch({ type: "questionLoaded", payload: data });
      } catch {
        dispatch({ type: "dataFailed" });
      }
    };
    questions();
  }, []);
  return (
    <div className="app">
      <Header />
      <MainComponent>
        {status === "loading" && <Loader />}
        {status === "error" && <ErrorMessage />}
        {status === "ready" && (
          <StartScreen numOfQuestions={numOfQuestions} dispatch={dispatch} />
        )}
        {status === "active" && (
          <>
            <Progress
              index={index}
              numOfQuestions={numOfQuestions}
              score={score}
              maxPossibleScore={maxPossibleScore}
              answer={answer}
            />
            <Question
              index={index}
              currentQuestion={questions[index]}
              dispatch={dispatch}
              answer={answer}
              score={score}
            />
            <Footer>
              <Timer secondsRemaining={secondsRemaining} dispatch={dispatch} />
              <NextButton
                dispatch={dispatch}
                answer={answer}
                index={index}
                numOfQuestions={numOfQuestions}
                score={score}
              />
            </Footer>
          </>
        )}
        {status === "finished" && (
          <FinishScreen
            score={score}
            maxPossibleScore={maxPossibleScore}
            highScore={highScore}
            dispatch={dispatch}
          />
        )}
      </MainComponent>
      {/* <DateCounter/> */}
    </div>
  );
}

export default App;
