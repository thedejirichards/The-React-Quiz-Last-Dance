export type reducerType =
  | { type: "dec"}
  | { type: "inc" }
  | { type: "setCount"; payload: number }
  | { type: "setStep"; payload: number }
  | { type: "reset"};



export type StateType = {
    count: number,
    step: number
  }