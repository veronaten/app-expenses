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

  const filteredExpenses = props.items.filter( expense => {
    return (expense.date.getFullYear().toString() === filteredYear);
  })

  let expensesContent = <p>No expenses found.</p>;

  if (filteredExpenses.length > 0) {
    expensesContent = filteredExpenses.map((expense) => (
      <ExpenseItem
        key={expense.id} // для того, чтобы новый элемент добавлялся вначало, а не в конец
        title={expense.title} 
        amount={expense.amount}
        date={expense.date}
      />
    ))
  }

  return (
    <Card className="expense">
      <ExpensesFilter 
      selected={filteredYear} 
      onChangeFilter={filterChangeHandler} />
      {expensesContent}
    </Card>
  )
}

export  default Expense;