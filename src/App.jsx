import { useState } from "react";
import AddPerson from "./components/AddPerson";
import PersonList from "./components/PersonList";
import AddExpense from "./components/AddExpense";
import ExpenseList from "./components/ExpenseList";
import BalanceSummary from "./components/BalanceSummary";
import "./App.css";

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
    Object.keys(balances).forEach((person) => {
      balances[person] = Math.round((balances[person] + Number.EPSILON) * 100) / 100;
    });
    return balances;
  };
  
  const balances = calculateBalances();

  return(
    <div className="app-shell">
      <div className="app-container">
        <header className="app-header">
          <h1>Expense Splitter</h1>
          <p>Keep track of shared expenses in a simple, clean way.</p>
        </header>
        <main className="layout-stack">
          <section className="top-row">
            <AddPerson persons = {persons} setPersons = {setPersons}/>
            <AddExpense expenses = {expenses} setExpenses = {setExpenses} persons = {persons}/>
          </section>
          <section className="bottom-grid">
            <PersonList persons = {persons}/>
            <ExpenseList expenses = {expenses}/>
            <BalanceSummary balances = {balances} />
          </section>
        </main>
      </div>
    </div>
  )
}

export default App;