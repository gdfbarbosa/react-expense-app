import "./App.css";
import ExpenseList from "./components/ExpenseList";

const App = () => {
  const expensesArray = [
    { id: 1, title: "Sushi Naka", date: new Date(2022, 1, 11), value: 200.12 },
    { id: 2, title: "Verdemar", date: new Date(2022, 3, 7), value: 380.87 },
    {
      id: 3,
      title: "Nectar da Serra",
      date: new Date(2022, 5, 3),
      value: 127.55,
    },
    { id: 4, title: "Rest Minas II", date: new Date(2022, 6, 5), value: 80.47 },
  ];

  return (
    <div className="App">
      <header className="App-header">
        <h1>Personal Expense Tracker</h1>
        <ExpenseList expenses={expensesArray} />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
