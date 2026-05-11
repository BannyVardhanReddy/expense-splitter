function BalanceSummary({ balances }) {
  return (
    <section className="card">
      <h2>Balance Summary</h2>
      <div className="stack">
        {Object.entries(balances).map(([person, amount]) => (
          <div key={person} className={amount >= 0 ? "balance-positive" : "balance-negative"}>
            {person + ":"}{" "}
            {amount >= 0
              ? `gets back ${amount.toFixed(2)}`
              : `owes ${Math.abs(amount).toFixed(2)}`}
          </div>
        ))}
      </div>
    </section>
  );
}
export default BalanceSummary;
