import ExpenseItem from "./components/js/ExpenseItem";

const App = () => {
  const expenses = [
    {
      date: new Date(2022, 4, 7),
      title: 'breakfast',
      amount: 1000
    },
    {
      date: new Date(2022, 4, 7),
      title: 'lunch',
      amount: 2000
    },
    {
      date: new Date(2022, 4, 7),
      title: 'breakfast',
      amount: 1500
    }
  ];

  return (
    <div>
      <ExpenseItem date={expenses[0].date} title={expenses[0].title} amount={expenses[0].amount} expense={expenses[0]} />
      <ExpenseItem date={expenses[1].date} title={expenses[1].title} amount={expenses[1].amount} expense={expenses[0]} />
      <ExpenseItem date={expenses[2].date} title={expenses[2].title} amount={expenses[2].amount} expense={expenses[0]} />
    </div>
  );
}

export default App;
