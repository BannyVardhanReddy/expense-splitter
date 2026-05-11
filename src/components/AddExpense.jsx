import { useState } from "react";

function AddExpense({ expenses, setExpenses, persons }) {
    const initialForm = {
        description: "",
        amount: "",
        paidBy: "",
    };
    const [form, setForm] = useState(initialForm);

    function handleOnChange(e) {
        const { name, value } = e.target;
        setForm({
            ...form,
            [name]: value,
        });
    }

    function handleOnSubmit(e) {
        e.preventDefault();

        if (!form.description || !form.amount || !form.paidBy) {
            return;
        }

        setExpenses([
            ...expenses,
            {
                ...form,
                id: crypto.randomUUID(),
            },
        ]);

        setForm(initialForm);
    }

    return (
        <section className="card">
            <h2>Add Expense</h2>
            <form className="stack" onSubmit={handleOnSubmit}>
                <input
                    placeholder="Description"
                    name="description"
                    onChange={handleOnChange}
                    value={form.description}
                />
                <input
                    placeholder="Amount to be split"
                    name="amount"
                    onChange={handleOnChange}
                    value={form.amount}
                />
                <select name="paidBy" onChange={handleOnChange} value={form.paidBy}>
                    <option value="">Select who paid</option>
                    {persons.map((person) => (
                        <option key={person.id} value={person.name}>
                            {person.name}
                        </option>
                    ))}
                </select>
                <button type="submit">Submit</button>
            </form>
        </section>
    );
}

export default AddExpense;