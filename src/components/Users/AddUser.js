import React, { useState, useRef } from "react";
import Wrapper from "../Helper/Wrapper";

import Button from "../UI/Button";
import Cards from "../UI/Cards";
import ErrorModal from "../UI/ErrorModal";
import classes from "./AddUser.module.css";

const User = (props) => {
  const userNameRef = useRef();
  const ageRef = useRef();
  const [error, setError] = useState();

  const addUserHandler = (event) => {
    const enteredUsername = userNameRef.current.value;
    const enteredAge = ageRef.current.value;
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
    userNameRef.current.value = "";
    ageRef.current.value = "";
  };

  const dismissModalOverlay = () => setError(null);

  return (
    <React.Fragment>
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
          <input type="text" id="username" ref={userNameRef} />
          <label htmlFor="age">Age( In years) : </label>
          <input type="number" id="age" ref={ageRef} />
          <Button type="submit">Add User</Button>
        </form>
      </Cards>
    </React.Fragment>
  );
};

export default User;
