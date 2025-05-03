import React, { useContext } from "react";
import { ExpenseContext } from "../context/ExpenseContext";

const ExpenseList = () => {
  const { state, dispatch } = useContext(ExpenseContext);

  const filteredExpenses = (state?.expenses || []).filter(
    (exp) =>
      state?.filter?.category === "All" ||
      exp.category === state?.filter?.category
  );

  return (
    <div
      style={{
        marginTop: "20px",
        borderTop: "1px solid #e9ecef",
        paddingTop: "20px",
        border: "1px solid red",
      }}
    >
      <h3
        style={{
          marginBottom: "15px",
          color: "#343a40",
        }}
      >
        Your Expenses
      </h3>

      {filteredExpenses.length === 0 ? (
        <p
          style={{
            color: "#6c757d",
            fontStyle: "italic",
          }}
        >
          No expenses found
        </p>
      ) : (
        <div
          style={{
            display: "grid",
            gap: "10px",
          }}
        >
          {filteredExpenses.map((exp) => (
            <div
              key={exp.id}
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                padding: "12px 15px",
                backgroundColor: "#ffffff",
                borderRadius: "6px",
                boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
                transition: "transform 0.2s",
                ":hover": {
                  transform: "translateY(-2px)",
                },
              }}
            >
              <div
                style={{
                  display: "flex",
                  gap: "15px",
                  alignItems: "center",
                }}
              >
                <span
                  style={{
                    padding: "4px 8px",
                    backgroundColor: "#e9ecef",
                    borderRadius: "12px",
                    fontSize: "12px",
                    fontWeight: "500",
                    color: "#495057",
                  }}
                >
                  {exp.category}
                </span>
                <span
                  style={{
                    fontWeight: "500",
                  }}
                >
                  ${exp.amount.toFixed(2)}
                </span>
              </div>
              <button
                onClick={() =>
                  dispatch({ type: "DELETE_EXPENSE", payload: exp.id })
                }
                style={{
                  padding: "6px 12px",
                  backgroundColor: "#dc3545",
                  color: "white",
                  border: "none",
                  borderRadius: "4px",
                  cursor: "pointer",
                  fontSize: "14px",
                  transition: "background-color 0.2s",
                  ":hover": {
                    backgroundColor: "#c82333",
                  },
                }}
              >
                Delete
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ExpenseList;
