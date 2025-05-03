import React, { useContext } from "react";
import { ExpenseContext } from "../context/ExpenseContext";

const CategoryFilter = () => {
  const { state, dispatch } = useContext(ExpenseContext);

  const handleFilterChange = (e) => {
    dispatch({
      type: "SET_FILTER",
      payload: { ...state.filter, category: e.target.value },
    });
  };

  return (
    <div
      style={{
        margin: "20px 0",
        padding: "15px",
        backgroundColor: "#f8f9fa",
        borderRadius: "8px",
        boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
      }}
    >
      <label
        htmlFor="category-filter"
        style={{
          display: "block",
          marginBottom: "8px",
          fontWeight: "500",
          color: "#495057",
        }}
      >
        Filter Expenses:
      </label>
      <select
        id="category-filter"
        value={state.filter.category}
        onChange={handleFilterChange}
        style={{
          padding: "10px 12px",
          width: "100%",
          maxWidth: "300px",
          border: "1px solid #ced4da",
          borderRadius: "4px",
          fontSize: "16px",
          backgroundColor: "white",
          cursor: "pointer",
        }}
      >
        <option value="All">All Categories</option>
        {state.categories.map((category) => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </select>
    </div>
  );
};

export default CategoryFilter;
