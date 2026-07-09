import type { Dispatch } from "react";

export type questionType = {
  id: string;
  correctOption: number;
  options: string[];
  question: string;
  points: number;
  
};

export type reducerType =
  | { type: "questionLoaded"; payload: questionType[] }
  | { type: "dataFailed" }
  | { type: "start" }
  | { type: "newAnswer"; payload: { index: number; questionScore: number } }
  | {type: "nextQuestion"}
  | {type: "finish"; payload: number}
  | {type: "restart";}
  | {type: "tick"}

export type stateType = {
  questions: questionType[];
  status: string;
  index: number;
  answer: null | number;
  score: number;
  highScore: number;
  secondsRemaining: null | number
};

export type StartScreenType = {
  numOfQuestions: number;
  dispatch: Dispatch<reducerType>;
};

export type QuestionType = {
  index: number;
  currentQuestion: questionType;
  dispatch: Dispatch<reducerType>;
  answer: number | null;
  score: number
};

export type OptionType = {
  currentQuestion: questionType;
  dispatch: Dispatch<reducerType>;
  answer: number | null;
  score: number
};


export type NextButtonType = {
  dispatch: Dispatch<reducerType>;
  answer: number | null;
  index: number;
  numOfQuestions: number;
  score: number
}

export type ProgressTypes = {
  index: number;
  numOfQuestions: number;
  score: number;
  maxPossibleScore: number;
  answer: number | null
}

export type FinishScreenType = {
  score: number;
  maxPossibleScore: number;
  highScore: number;
  dispatch: Dispatch<reducerType>;
}

export type TimerType = {
  secondsRemaining: null | number;
  dispatch: Dispatch<reducerType>;
}