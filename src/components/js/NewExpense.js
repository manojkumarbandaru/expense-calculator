import '../css/NewExpense.css';
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
    const saveExpenseDataHandler = (expenseDataSubmitted) => {
        //two way data binding. this is for extracting the data submitted by child component ExpenseForm
        const expenseData = {
            ...expenseDataSubmitted,
            id: Math.random().toString()
        };
        props.addNewExpense(expenseData);
    }

    return (
        <div className="new-expense">
            <ExpenseForm saveExpenseData={saveExpenseDataHandler} />
        </div>
    );
};

export default NewExpense;