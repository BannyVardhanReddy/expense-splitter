import { useState } from "react";
import AddPerson from "./components/AddPerson";
import PersonList from "./components/PersonList";
import AddExpense from "./components/AddExpense";
import ExpenseList from "./components/ExpenseList";
import BalanceSummary from "./components/BalanceSummary";

function App(){
  const [persons,setPersons] = useState([]);
  const [expenses,setExpenses] = useState([]);
  
  const calculateBalances = () =>{
    const balances = {};
    if(persons.length === 0){
      return {};
    }
    persons.forEach((p)=>balances[p.name] =  0);

    expenses.forEach((expense)=>{
      const share = expense.amount/persons.length;

      balances[expense.paidBy] += expense.amount - share;

      persons.forEach(p=>{
        if(p.name!==expense.paidBy){
          balances[p.name] -= share;
        }
      });
    });
    return balances;
  };
  
  const balances = calculateBalances();

  return(
    <div>
      <AddPerson persons = {persons} setPersons = {setPersons}/>
      <PersonList persons = {persons}/>
      <AddExpense expenses = {expenses} setExpenses = {setExpenses} persons = {persons}/>
      <ExpenseList expenses = {expenses}/>
      <BalanceSummary balances = {balances} />
    </div>
  )
}

export default App;