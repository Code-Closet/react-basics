import style from "./Cards.module.css";

const Cards = (props) => {
  return (
    <div className={`${style.card} ${props.className}`}>{props.children}</div>
  );
};

export default Cards;
