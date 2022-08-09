function ExpenseDate(props) {
  const month = props.date.toLocaleString("en-US", { month: "long" });
  const weekday = props.date.toLocaleString("en-US", { weekday: "long" });
  const day = props.date.toLocaleString("en-US", { day: "numeric" });

  return (
    <div>
      <div>{month}</div>
      <div>{weekday}</div>
      <div>{day}</div>
    </div>
  );
}

export default ExpenseDate;
