function BalanceSummary({ balances }) {
  return (
    <div>
      {Object.entries(balances).map(([person, amount]) => (
        <div key = {person} style = {{color : amount>=0 ? 'green' : 'red'}}>
          {person} :{" "}
          {amount >= 0
            ? `gets back ${amount}`
            : `owes ${Math.abs(amount)}`}{" "}
        </div>
      ))}
      ;
    </div>
  );
}
export default BalanceSummary;
