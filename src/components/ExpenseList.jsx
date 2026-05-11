function ExpenseList({expenses}){
    return(
        <section className="card">
            <h2>Expenses</h2>
            <ul className="list">
                {expenses.map((expense)=>{
                    return(
                        <li key={expense.id}>{expense.description} - {expense.amount} - {expense.paidBy}</li>
                    )
                })}
            </ul>
        </section>
    )
}

export default ExpenseList;