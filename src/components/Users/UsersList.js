import Cards from "../UI/Cards";
import classes from "./UsersList.module.css";

const UsersList = (props) => {
  return (
    <div>
      <Cards className={classes.users}>
        <ul>
          {props.users.map((user) => (
            <li key={user.name}>
              {user.name} ({user.age} years old)
            </li>
          ))}
        </ul>
      </Cards>
    </div>
  );
};

export default UsersList;
