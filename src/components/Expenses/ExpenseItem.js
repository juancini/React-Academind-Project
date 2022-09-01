import React, { useState } from 'react';

import Card from '../UI/Card';
import ExpenseDate from './ExpenseDate';
import './ExpenseItem.css';

// Card element
const ExpenseItem = (props) => {
  // useState() return a duple
  // first element is a pointer to the managed prop.title
  // second element is a pointer to the function to change the title
  const [title, setTitle] = useState(props.title);

  // Handler for click on the button to change the title
  const clickHandler = () => {
    // assign a value to title
    setTitle('shouldnt have touched that :(');
  };

  // JSX to return
  return (
    <Card className='expense-item'>
      <ExpenseDate date={props.date} />
      <div className='expense-item__description'>
        <h2>{title}</h2>
        <div className='expense-item__price'>${props.amount}</div>
      </div>
      <button onClick={clickHandler}>Change Title</button>
    </Card>
  );
}

export default ExpenseItem;