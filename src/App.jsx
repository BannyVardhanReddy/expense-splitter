import { useState } from "react";
import AddPerson from "./components/AddPerson";
import PersonList from "./components/PersonList";
import AddExpense from "./components/AddExpense";
import ExpenseList from "./components/ExpenseList";
function App(){
  const [persons,setPersons] = useState([]);
  const [expenses,setExpenses] = useState([]);
  
  return(
    <div>
      <AddPerson persons = {persons} setPersons = {setPersons}/>
      <PersonList persons = {persons}/>
      <AddExpense expenses = {expenses} setExpenses = {setExpenses} persons = {persons}/>
      <ExpenseList expenses = {expenses}/>
    </div>
  )
}

export default App;