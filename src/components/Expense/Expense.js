import { getAllByAltText } from "@testing-library/react";
import React, { useState } from "react";
import Card from "../UI/Card";
import "./Expense.css";

import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";

function Expense(props) {
  const [filteredYear, setFilteredYear] = useState("2020");
  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = props.expenses.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });
  return (
    <Card className="expenses">
      <ExpensesFilter
        selected={filteredYear}
        onChangeFilter={filterChangeHandler}
      />
      <ExpensesList items={filteredExpenses} />
    </Card>
  );
}

export default Expense;
