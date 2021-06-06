import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import { Loading, TodoDetails } from "../../components";
import { useAsyncFetch } from "../../hooks";
import { TodoActionTypes } from "../../redux/actionCreators";

const useStyles = makeStyles({
  root: {
    padding: "20px 40px",
  },
  todos: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  info: {
    display: "flex",
  },
  user: {
    marginRight: 20,
  },
  error: {
    color: "#ea0b0b",
    textAlign: "center",
  },
});

const Todos = () => {
  const dispatch = useDispatch();
  const classes = useStyles();
  const totalUsers = useSelector((state) => state.users.length);
  const allTodos = useSelector((state) => state.todos);

  const onSuccess = (todos) => {
    dispatch({ type: TodoActionTypes.SAVE, payload: { todos } });
  };
  const shouldRefetch = !allTodos.length;
  const [isLoading, error] = useAsyncFetch("/todos", onSuccess, shouldRefetch);

  const showAllTodos = () => {
    return allTodos.map((todo, index) => {
      const { title, completed } = todo;
      return <TodoDetails key={index} title={title} completed={completed} />;
    });
  };
  return isLoading ? (
    <Loading />
  ) : error ? (
    <div className={classes.error}>{error}</div>
  ) : (
    <div className={classes.root}>
      <div className={classes.info}>
        <div className={classes.user}>
          <b>Users :</b> {totalUsers}
        </div>
      </div>
      <div className={classes.todos}>{showAllTodos()}</div>
    </div>
  );
};

export default Todos;
