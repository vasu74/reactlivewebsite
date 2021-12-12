import React, { useState } from "react";

import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  const [addExpense, setAddExpense] = useState(false);
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
    setAddExpense(false);
  };

  const startEditingHandler = () => {
    setAddExpense(true);
  };

  const stopEditingHandler = () => {
    setAddExpense(false);
  };
  return (
    <div className="new-expense">
      {!addExpense && (
        <button onClick={startEditingHandler}> Add New Expenses</button>
      )}
      {addExpense && (
        <ExpenseForm
          onStopEdit={stopEditingHandler}
          onSaveExpenseData={saveExpenseDataHandler}
        />
      )}
    </div>
  );
};

export default NewExpense;
