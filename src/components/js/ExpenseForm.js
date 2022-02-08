import { useState } from 'react';
import '../css/ExpenseForm.css';

const ExpenseForm = (props) => {
    const [title, setTitle] = useState('');
    const [amount, setAmount] = useState(0);
    const [date, setDate] = useState('');
    // state change using a single object
    // const [userInput, setUserInput] = useState({
    //     title: '',
    //     amount: 0,
    //     date: ''
    // });

    const titleChangeHanlder = (event) => {
        setTitle(event.target.value);
        // setUserInput((prevState) => {
        //     return {...prevState, title: event.target.value};
        // });
        console.log(event.target.value);
    };

    const amountChangeHandler = (event) => {
        setAmount(event.target.value);
        // setUserInput((prevState) => {
        //     return {...prevState, amount: event.target.value};
        // });
        console.log(event.target.value);
    };

    const dateChangeHandler = (event) => {
        setDate(event.target.value);
        // setUserInput((prevState) => {
        //     return {...prevState, date: event.target.value};
        // });
        console.log(event.target.value);
    };

    const clearState = () => {
        setTitle('');
        setAmount(0);
        setDate('');
    };

    const formSubmitHanlder = (event) => {
        // stopping the page from reloading
        event.preventDefault();

        const expenseData = {
            title: title,
            amount: amount,
            date: new Date(date)
        };
        props.saveExpenseData(expenseData);

        clearState();
    };

    return (
        <form onSubmit={formSubmitHanlder}>
            <div className="new-expense__controls">
                <div className='new-expense__control'>
                    <label>Title</label>
                    <input type='text' onChange={titleChangeHanlder} value={title} />
                </div>
                <div className='new-expense__control'>
                    <label>Amount</label>
                    <input type='number' value={amount} onChange={amountChangeHandler} />
                </div>
                <div className='new-expense__control'>
                    <label>Date</label>
                    <input type='date' min='2020-01-01' max='2022-01-31' value={date} onChange={dateChangeHandler} />
                </div>
            </div>
            <div className='new-expense__actions'>
                <button>Add Expense</button>
            </div>        
        </form>
    );
};

export default ExpenseForm;