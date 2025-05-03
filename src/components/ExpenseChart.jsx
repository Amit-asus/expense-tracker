import React, { useContext } from "react";
import { ExpenseContext } from "../context/ExpenseContext";

const ExpenseChart = () => {
  const { state } = useContext(ExpenseContext);

  // Calculate total expenses for each category
  const categoryTotals = state.categories.map((cat) => {
    const total = (state.expenses || [])
      .filter((exp) => exp.category === cat)
      .reduce((acc, exp) => acc + exp.amount, 0);

    return { name: cat, total };
  });

  // Find maximum value for scaling
  const maxTotal = Math.max(...categoryTotals.map((cat) => cat.total), 1);

  // Color palette
  const colors = ["#4e79a7", "#f28e2b", "#e15759", "#76b7b2", "#59a14f"];

  return (
    <div
      style={{
        backgroundColor: "#ffffff",
        borderRadius: "8px",
        padding: "20px",
        boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
        marginBottom: "20px",
      }}
    >
      <h3
        style={{
          marginTop: "0",
          marginBottom: "20px",
          color: "#2c3e50",
          fontSize: "18px",
          fontWeight: "600",
        }}
      >
        Spending by Category
      </h3>

      <div style={{ display: "grid", gap: "12px" }}>
        {categoryTotals.map((cat, index) => (
          <div key={cat.name} style={{ marginBottom: "8px" }}>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginBottom: "6px",
              }}
            >
              <span
                style={{
                  fontWeight: "500",
                  color: "#34495e",
                }}
              >
                {cat.name}
              </span>
              <span
                style={{
                  fontWeight: "600",
                  color: "#2c3e50",
                }}
              >
                ${cat.total.toFixed(2)}
              </span>
            </div>

            <div
              style={{
                width: "100%",
                height: "20px",
                backgroundColor: "#ecf0f1",
                borderRadius: "10px",
                overflow: "hidden",
              }}
            >
              <div
                style={{
                  width: `${(cat.total / maxTotal) * 100}%`,
                  height: "100%",
                  backgroundColor: colors[index % colors.length],
                  borderRadius: "10px",
                  transition: "width 0.5s ease",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "flex-end",
                  paddingRight: "8px",
                  color: "white",
                  fontSize: "12px",
                  fontWeight: "bold",
                }}
              >
                {cat.total > 0
                  ? `${Math.round((cat.total / maxTotal) * 100)}%`
                  : ""}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExpenseChart;
