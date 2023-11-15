import "./ExpenseItem.css";

function ExpenseItem(props) {
  const date = {
    month: props.date.toLocaleString("en-US", { month: "long" }),
    year: props.date.getFullYear(),
    day: props.date.toLocaleString("en-US", { day: "2-digit" }),
  };
  return (
    <div className="expense-item">
      <div>
        <div>{date.month}</div>
        <div>{date.year}</div>
        <div>{date.day}</div>
      </div>
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
