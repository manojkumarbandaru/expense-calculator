import ExpenseItem from "./components/js/ExpenseItem";
import Card from "./components/js/Card";
import NewExpense from "./components/js/NewExpense";

const App = () => {
  const expenses = [
    {
      id: '1',
      date: new Date(2022, 4, 7),
      title: 'breakfast',
      amount: 1000
    },
    {
      id: '2',
      date: new Date(2022, 4, 7),
      title: 'lunch',
      amount: 2000
    },
    {
      id: '3',
      date: new Date(2022, 4, 7),
      title: 'breakfast',
      amount: 1500
    }
  ];

  const addNewExpenseHandler = (expenseData) => {
    console.log(expenseData);
  };

  return (
    <Card>
      <NewExpense addNewExpense={addNewExpenseHandler} />
      <ExpenseItem date={expenses[0].date} title={expenses[0].title} amount={expenses[0].amount} />
      <ExpenseItem date={expenses[1].date} title={expenses[1].title} amount={expenses[1].amount} />
      <ExpenseItem date={expenses[2].date} title={expenses[2].title} amount={expenses[2].amount} />
    </Card>
  );
}

export default App;
