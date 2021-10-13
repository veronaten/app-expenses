import React, {useState} from 'react';

import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense = (props) => {
  const [isEditing, setIsEditing] = useState(false);
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString()
    };
    props.onAddExpense(expenseData);
    setIsEditing(false);
  }

  const startEditingHandler = () => {
    return setIsEditing(true);
  };

  const stopEditingHandler = () => {
    return setIsEditing(false);
  };

  return (
  <div className="new-expense">
    {!isEditing && <button onClick={startEditingHandler} className="new-expense__actions">Add new expense</button>}
    { isEditing && <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancel={stopEditingHandler} />}
  </div>
  )
};

export default NewExpense;