import { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = () => {
  // define states
  const [itemTitle, setItemTitle] = useState();
  const [itemAmount, setItemAmount] = useState();
  const [itemDate, setItemDate] = useState();

  // events handlers
  const titleChangeHandler = (event) => {
    setItemTitle(event.target.value);
  };

  const amountChangeHandler = (event) => {
    setItemAmount(event.target.value);
  };

  const dateChangeHandler = (event) => {
    setItemDate(event.target.value);
  };

  // main component JSX
  return (
    <form>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" onChange={titleChangeHandler}></input>
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            onChange={amountChangeHandler}
          ></input>
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            onChange={dateChangeHandler}
          ></input>
        </div>
        <div className="new-expense__actions">
          <button type="submit">Add Expense</button>
        </div>
      </div>
    </form>
  );
};

export default ExpenseForm;
