import "./ExpenseForm.css";
import { useState } from "react";

const ExpenseForm = () => {
  const [userInput, setUserInput] = useState({
    enteredTitle: "",
    enteredAmount: "",
    enteredDate: "",
  });
  console.log("User input evaluated by React");

  const inputChangeHandler = (identifier, value) => {
    if (identifier === "title") {
      setUserInput({ ...userInput, enteredTitle: value });
    } else if (identifier === "date") {
      setUserInput({ ...userInput, enteredDate: value });
    } else {
      setUserInput({ ...userInput, enteredAmount: value });
    }
  };

  const submitHandler = (e) => {
    e.preventDefault();

    const expenseData = {
      title: userInput.enteredTitle,
      amount: userInput.enteredAmount,
      date: new Date(userInput.enteredDate),
    };

    console.log(expenseData);
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            onChange={(e) => {
              inputChangeHandler("title", e.target.value);
            }}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            onChange={(e) => {
              inputChangeHandler("amount", e.target.value);
            }}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            onChange={(e) => {
              inputChangeHandler("date", e.target.value);
            }}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="sumbit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
