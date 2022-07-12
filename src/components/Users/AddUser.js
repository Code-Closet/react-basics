import { useState } from "react";

import Button from "../UI/Button";
import Cards from "../UI/Cards";
import ErrorModal from "../UI/ErrorModal";
import classes from "./AddUser.module.css";

const User = (props) => {
  const [enteredUsername, setEnteredUsername] = useState("");
  const [enteredAge, setEnteredAge] = useState("");
  const [error, setError] = useState();
  const addUserHandler = (event) => {
    event.preventDefault();
    if (
      enteredUsername.trim().length === 0 ||
      enteredAge.trim().length === 0 ||
      +enteredAge < 1
    ) {
      setError({
        title: "Invalid input",
        message: "Please enter a valid username and age",
      });
      return;
    }
    props.onAddUser(enteredUsername, enteredAge);
    console.log(`${enteredUsername} ${enteredAge}`);
    setEnteredUsername("");
    setEnteredAge("");
  };
  const usernameChangeHandler = (event) =>
    setEnteredUsername(event.target.value);
  const ageChangeHandler = (event) => setEnteredAge(event.target.value);
  const dismissModalOverlay = () => setError(null);
  return (
    <div>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onClickOK={dismissModalOverlay}
        />
      )}
      <Cards className={classes.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">Username : </label>
          <input
            type="text"
            id="username"
            onChange={usernameChangeHandler}
            value={enteredUsername}
          />
          <label htmlFor="age">Age( In years) : </label>
          <input
            type="number"
            id="age"
            value={enteredAge}
            onChange={ageChangeHandler}
          />
          <Button type="submit">Add User</Button>
        </form>
      </Cards>
    </div>
  );
};

export default User;
