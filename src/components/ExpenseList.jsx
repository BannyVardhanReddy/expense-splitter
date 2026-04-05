function ExpenseList({expenses}){
    return(
        <ul>
            {expenses.map((expense)=>{
                return(
                    <li key={expense.id}>{expense.description} - {expense.amount} - {expense.paidBy}</li>
                )
            })}
        </ul>
    )
}

export default ExpenseList;