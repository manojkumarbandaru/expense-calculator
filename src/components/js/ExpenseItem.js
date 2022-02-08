import React, { useState } from 'react';

import '../css/ExpenseItem.css';
import ExpenseDate from './ExpenseDate';
import Card from './Card';

const ExpenseItem = (props) => {
    const [title, setTitle] = useState(props.title);
    const buttonClickHandler = () => {
        setTitle('Updated!');
        console.log(title);
    };

    return (
        <Card className='expense-item'>
            {/* content b/n Card tag is passed as children prop to Card component */}
            <ExpenseDate date={props.date} />
            <div className='expense-item__description'>
                <h2>{title}</h2>
                <div className='expense-item__price'>${props.amount}</div>
                <button onClick={buttonClickHandler}>change Title</button>
            </div>
        </Card>
    );
}

export default ExpenseItem;