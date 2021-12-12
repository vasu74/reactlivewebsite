import React, { useState } from "react";
import "./ExpenseDate.css";
import ExpenseData from "./ExpenseDate";
import Card from "../UI/Card";

function ExpenseItem(props) {
  const [title, setTitle] = useState(props.title);
  console.log("evaluted by react");

  const clickHandler = () => {
    setTitle("updated");
    console.log(title);
  };

  return (
    <li>
      <Card className="expense-item">
        <ExpenseData date={props.date} />
        <div className="expense-item__description">
          <h2>{title}</h2>
          <div className="expense-item__price">$ {props.amount}</div>
        </div>
        <button onClick={clickHandler}>change Name</button>
      </Card>
    </li>
  );
}
export default ExpenseItem;
