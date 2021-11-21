import "./card.css";
function Card(cardData) {
  const classes = "card " + cardData.className;
  return <div className={classes}>{cardData.children}</div>;
}
export default Card;
