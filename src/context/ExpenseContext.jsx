import React, { createContext, useReducer, useEffect } from "react";
console.log("Ex");
const initialState = {
  expense: [],
  categories: ["Food", "Travel", "Entertainment", "Utilities", "Bills"],
  filter: { categories: "All", month: new Date().getMonth() },
};

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_EXPENSE":
      return { ...state, expense: [...state.expense, action.expense] };
    case "DELETE_EXPENSE":
      return {
        ...state,
        expense: state.expense.filter((expense) => expense.id !== action.id),
      };
    case "SET_FILTER":
      return { ...state, filter: action.filter };
    default:
      return state;
  }
};

export const ExpenseContext = createContext();

export const ExpenseProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  console.log("Expense Provider state:", state);

  //load data from local storage
  useEffect(() => {
    const savedExpenses = JSON.parse(localStorage.getItem("expenses"));
    if (savedExpenses) {
      dispatch({ type: "ADD_EXPENSE", expense: savedExpenses });
    }
  }, []);

  //save data to local storage
  useEffect(() => {
    localStorage.setItem("expenses", JSON.stringify(state.expense));
  }, [state.expense]);

  return (
    <ExpenseContext.Provider value={{ state, dispatch }}>
      {children}
    </ExpenseContext.Provider>
  );
};
