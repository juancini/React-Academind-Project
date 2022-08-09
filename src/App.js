import ExpenseList from "./components/ExpenseList";

function App() {
  const expenses = [
    { title: "Ropa", amount: 19800, date: new Date(2022, 6, 28) },
    { title: "Super", amount: 2500, date: new Date(2021, 6, 29) },
    { title: "Transporte", amount: 400, date: new Date(2021, 6, 30) },
    { title: "Caramelos", amount: 500, date: new Date(2021, 6, 28) },
  ];

  return (
    <div>
      <h2>Let's get started!</h2>
      <ExpenseList expenses={expenses}/>
    </div>
  );
}

export default App;
