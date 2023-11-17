import "./Card.css";

const Card = (props) => {
  const classes = "card " + props.className;
  // props.className calls all the classes we defined in any tag contained in the Card tag
  return <div className={classes}>{props.children}</div>;
  // props.children are all the values/tags between Card tag wherever we are using the Card component
};

export default Card;
