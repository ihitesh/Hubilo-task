import React, { useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import { UserDetails, Loading } from "../../components";
import { useAsyncFetch } from "../../hooks";
import { UserActionTypes } from "../../redux/actionCreators";

const useStyles = makeStyles({
  root: {
    padding: "20px 40px",
  },
  users: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  info: {
    display: "flex",
  },
  post: {
    marginRight: 20,
  },
  error: {
    color: "#ea0b0b",
    textAlign: "center",
  },
});

const Users = () => {
  const dispatch = useDispatch();
  const classes = useStyles();
  const totalPosts = useSelector((state) => state.posts.length);
  const totalAlbums = useSelector((state) => state.albums.length);
  const allUsers = useSelector((state) => state.users);

  const onSuccess = useCallback(
    (users) => {
      dispatch({ type: UserActionTypes.SAVE, payload: { users } });
    },
    [dispatch]
  );

  const shouldRefetch = !allUsers.length;
  const [isLoading, error] = useAsyncFetch("/users", onSuccess, shouldRefetch);

  const showAllUsers = () => {
    return allUsers.map((user, index) => {
      const {
        name,
        email,
        phone,
        website,
        company: { name: companyName },
      } = user;
      return (
        <UserDetails
          key={index}
          name={name}
          email={email}
          phone={phone}
          website={website}
          companyName={companyName}
        />
      );
    });
  };
  return isLoading ? (
    <Loading />
  ) : error ? (
    <div className={classes.error}>{error}</div>
  ) : (
    <div className={classes.root}>
      <div className={classes.info}>
        <div className={classes.post}>
          <b>Posts :</b> {totalPosts}
        </div>
        <div>
          <b>Albums :</b> {totalAlbums}
        </div>
      </div>
      <div className={classes.users}>{showAllUsers()}</div>
    </div>
  );
};

export default Users;
