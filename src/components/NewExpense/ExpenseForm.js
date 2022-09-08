import { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = () => {
  // define states
  // one way to declare states (most common)
  //   const [itemTitle, setItemTitle] = useState();
  //   const [itemAmount, setItemAmount] = useState();
  //   const [itemDate, setItemDate] = useState();

    // another way to declare multiple states (less common)
  const [userInput, setUserInput] = useState({
    ItemTitle: "",
    ItemAmount: "",
    ItemDate: "",
  });

  // events handlers
  const titleChangeHandler = (event) => {
    setUserInput({
      ...userInput,
      ItemTitle: event.target.value,
    });
  };

  const amountChangeHandler = (event) => {
    setUserInput({
      ...userInput,
      ItemAmount: event.target.value,
    });
  };

  const dateChangeHandler = (event) => {
    setUserInput({
      ...userInput,
      ItemDate: event.target.value,
    });
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
