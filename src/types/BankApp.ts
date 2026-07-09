export type StateType = {
  balance: number;
  loan: number;
  isActive: boolean;
};

export type ActionType =
  | { type: "openAccount" }
  | { type: "deposit"; payload: number }
  | { type: "withdraw"; payload: number }
  | { type: "requestLoan" }
  | { type: "payLoan" }
  | { type: "closeAccount" };