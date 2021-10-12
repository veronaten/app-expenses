import React, { useState } from 'react';

import ExpensesFilter from "./ExpensesFilter";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import "./Expense.css";

const Expense = (props) => {
  const [filteredYear, setFilteredYear] = useState('2020');

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  }

  return (
    <Card className="expense">
      <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
      {props.items.map(expense => 
      <ExpenseItem 
        title={expense.title} 
        amount={expense.amount}
        date={expense.date}
      />)}
    </Card>
  )
}

export  default Expense;