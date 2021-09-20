import {useState} from "react";
import ExpenseForm from './ExpenseForm';
import './NewExpense.css';


const NewExpense = (props) => {
    const [isEditing, setIsEditing] = useState(false)

    const saveExpenseDataHandler =(enteredExpenseData) =>{
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        };
        props.onAddExpense(expenseData)
        setIsEditing(false)
    }
    const editingModeOn = () => {
        setIsEditing(true)
        
    }

    const editingModeOff = () =>{
        setIsEditing(false)
    }
    return (
        <div className='new-expense'>
            {!isEditing &&<button onClick={editingModeOn}>Add New Expense</button>}
            {isEditing && <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onclick={editingModeOff}/>} 
            
        </div>
    )
}

export default NewExpense;