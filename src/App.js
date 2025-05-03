import "./App.css";
import AddExpenseForm from "./components/AddExpenseForm";
import CategoryFilter from "./components/CategoryFilter";
import ExpenseChart from "./components/ExpenseChart";
import ExpenseList from "./components/ExpenseList";
import { ExpenseProvider } from "./context/ExpenseContext";
function App() {
  console.log("App is rendering...  ");
  return (
    <div>
      <ExpenseProvider>
        <h1>My Expense Tracker</h1>
        <AddExpenseForm />
        <CategoryFilter />
        <ExpenseChart />
        <ExpenseList />
      </ExpenseProvider>
    </div>
  );
}

export default App;
