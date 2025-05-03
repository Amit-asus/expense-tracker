import React, { useState, useContext } from "react";
import { ExpenseContext } from "../context/ExpenseContext";

const AddExpenseForm = () => {
  const { state, dispatch } = useContext(ExpenseContext);
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState(state.categories[0]);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({
      type: "ADD_EXPENSE",
      expense: {
        id: Date.now(),
        amount: Number(amount),
        category,
        date: new Date().toISOString(), // Added date field
      },
    });
    setAmount("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        display: "flex",
        gap: "10px",
        alignItems: "center",
        padding: "20px",
        backgroundColor: "#f8f9fa",
        borderRadius: "8px",
        boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
        marginBottom: "20px",
      }}
    >
      <input
        type="number"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        placeholder="Amount"
        required
        style={{
          padding: "10px 12px",
          border: "1px solid #ced4da",
          borderRadius: "4px",
          fontSize: "16px",
          flex: "1",
          minWidth: "120px",
        }}
      />
      <select
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        style={{
          padding: "10px 12px",
          border: "1px solid #ced4da",
          borderRadius: "4px",
          fontSize: "16px",
          backgroundColor: "white",
          cursor: "pointer",
          minWidth: "150px",
        }}
      >
        {state.categories.map((cat) => (
          <option value={cat} key={cat}>
            {cat}
          </option>
        ))}
      </select>
      <button
        type="submit"
        style={{
          padding: "10px 20px",
          backgroundColor: "#28a745",
          color: "white",
          border: "none",
          borderRadius: "4px",
          fontSize: "16px",
          cursor: "pointer",
          fontWeight: "500",
          transition: "background-color 0.2s",
          ":hover": {
            backgroundColor: "#218838",
          },
        }}
      >
        Add Expense
      </button>
    </form>
  );
};

export default AddExpenseForm;
