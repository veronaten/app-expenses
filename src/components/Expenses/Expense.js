import React, { useState } from 'react';

import ExpensesList from './ExpensesList';
import ExpensesFilter from "./ExpensesFilter";
import Card from "../UI/Card";
import "./Expense.css";

const Expense = (props) => {
  const [filteredYear, setFilteredYear] = useState('2020');

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  }

  const filteredExpenses = props.items.filter( expense => {
    return (expense.date.getFullYear().toString() === filteredYear);
  })

  return (
    <Card className="expense">
      <ExpensesFilter 
      selected={filteredYear} 
      onChangeFilter={filterChangeHandler} />
      <ExpensesList items={filteredExpenses}/>
    </Card>
  )
}

export  default Expense;