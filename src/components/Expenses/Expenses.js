import React, { useState } from "react";
import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import "./ExpensesFilter.css";

const Expenses = (props) => {
  const [filterdYear, setFilterdYear] = useState("2020");
  const filterChangeHandler = (selectedYear) => {
    setFilterdYear(selectedYear);
  };
  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filterdYear}
          onChangeFilter={filterChangeHandler}
        />
        {props.items.map((expense) => (
          <ExpenseItem
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        ))}
      </Card>
    </div>
  );
};

export default Expenses;
