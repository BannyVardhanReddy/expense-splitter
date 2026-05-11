# 💸 Expense Splitter

A React application that helps groups of people split expenses fairly and calculate exactly who owes whom — a simplified Splitwise clone.

🔗 **[Live Demo](https://expense-splitter-react-app.netlify.app/)** | 📂 **[GitHub](https://github.com/BannyVardhanReddy/expense-splitter)**

---

## ✨ Features

- **Add group members** — dynamically add people to the group
- **Log expenses** — record who paid, how much, and what for
- **Auto balance calculation** — instantly calculates each person's net balance
- **Smart settlements** — suggests the minimum transactions needed to settle all debts
- **Real-time updates** — all calculations update instantly as expenses are added

---

## 🧠 How It Works

Each expense is split equally among all group members. The app tracks:
- Who paid (gets credited)
- Everyone else (gets debited their share)

The settlement algorithm uses a **greedy matching approach** — it matches the person who owes the most with the person owed the most, settling as much as possible in one transaction, then repeats until all balances are zero.

**Example:**
```
Banny paid ₹300 for Lunch  →  Banny: +200, Ravi: -100, Kiran: -100
Ravi paid ₹90 for Auto     →  Banny: +170, Ravi: -40,  Kiran: -130

Settlements:
  Kiran pays Banny ₹130
  Ravi pays Banny ₹40
```

---

## 🛠️ Tech Stack

- **React** — component-based UI
- **useState** — managing persons, expenses, and derived balance state
- **Derived state** — balances and settlements are calculated from expenses, never stored in state
- **Plain CSS** — custom styling
- **Netlify** — deployment

---

## 📂 Project Structure

```
src/
├── components/
│   ├── AddPerson.jsx       → input to add group members
│   ├── PersonList.jsx      → displays all members
│   ├── AddExpense.jsx      → form to log a new expense
│   ├── ExpenseList.jsx     → displays all logged expenses
│   ├── BalanceSummary.jsx  → shows net balance per person
│   └── Settlements.jsx     → shows who pays whom and how much
└── App.jsx                 → owns all state and calculation logic
```

---

## 🚀 Getting Started

```bash
# Clone the repository
git clone https://github.com/BannyVardhanReddy/expense-splitter.git

# Navigate into the project
cd expense-splitter

# Install dependencies
npm install

# Start the development server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) to view it in the browser.

---

## 💡 Key Concepts Demonstrated

- **Lifting state up** — all state lives in `App.jsx` and is passed down as props so every component has access to the data it needs
- **Derived state** — balance and settlement data is never stored in state, it's always recalculated from the expenses array ensuring UI is always in sync
- **Immutable state updates** — expenses and persons arrays are always updated by creating new arrays, never by mutating existing state directly
- **Controlled forms** — multi-field forms managed with a single state object and one `onChange` handler using `e.target.name`
- **Greedy settlement algorithm** — pure JavaScript logic to minimize the number of transactions needed to settle all group debts

---

## 📸 Screenshot

> _Add a screenshot of your app here_
> `![Expense Splitter Screenshot](./screenshot.png)`

---

## 🔮 Future Improvements

- [ ] Connect to a Node.js + Express + MySQL backend for data persistence
- [ ] Unequal expense splitting (custom percentages)
- [ ] Edit and delete expenses
- [ ] Export settlement summary as PDF

---

## 👨‍💻 Author

**Banny Vardhan Reddy**
- GitHub: [@BannyVardhanReddy](https://github.com/BannyVardhanReddy)
