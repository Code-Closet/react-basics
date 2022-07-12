import Button from "./Button";
import Cards from "./Cards";
import classes from "./ErrorModal.module.css";

const ErrorModal = (props) => {
  return (
    <div>
      <div className={classes.backdrop} onClick={props.onClickOK} />
      <Cards className={classes.modal}>
        <header className={classes.header}>
          <h2>{props.title}</h2>
        </header>
        <div className={classes.content}>
          <p>{props.message}</p>
        </div>
        <footer className={classes.actions}>
          <Button onClick={props.onClickOK}>OK</Button>
        </footer>
      </Cards>
    </div>
  );
};

export default ErrorModal;
