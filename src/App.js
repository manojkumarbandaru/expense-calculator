import { useState } from "react";
import ExpenseItem from "./components/js/ExpenseItem";
import Card from "./components/js/Card";
import NewExpense from "./components/js/NewExpense";

const App = () => {
  const INTIAL_EXPENSES = [
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

  const [expenses, setExpenses] = useState(INTIAL_EXPENSES);

  const addNewExpenseHandler = (expenseData) => {
    console.log(expenseData);
    setExpenses((prevState) => {
      return [expenseData, ...prevState]
    });
  };

  return (
    <Card>
      <NewExpense addNewExpense={addNewExpenseHandler} />
      {
        expenses.map((expense) => {
          return <ExpenseItem key={expense.id} date={expense.date} title={expense.title} amount={expense.amount} />
        })
      }
    </Card>
  );
}

export default App;
