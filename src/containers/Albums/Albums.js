import React, { useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import { Album, Loading } from "../../components";
import { useAsyncFetch } from "../../hooks";
import { AlbumActionTypes } from "../../redux/actionCreators";

const useStyles = makeStyles({
  root: {
    padding: "20px 40px",
  },
  albums: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  error: {
    color: "#ea0b0b",
    textAlign: "center",
  },
});

const Albums = () => {
  const dispatch = useDispatch();
  const classes = useStyles();

  // Keeping Albums in redux because data from API is constant, it is not changing.
  // So keeping that in mind, when we go to some other pages and return to Albums again, we will not have to call api again.

  // Same goes for Users and Todos Data

  const allAlbums = useSelector((state) => state.albums);

  const onSuccess = useCallback(
    (albums) => {
      dispatch({ type: AlbumActionTypes.SAVE, payload: { albums } });
    },
    [dispatch]
  );

  const shouldRefetch = !allAlbums.length;
  const [isLoading, error] = useAsyncFetch("/albums", onSuccess, shouldRefetch);

  const showAllAlbums = () => {
    return allAlbums.map((album, index) => {
      const { title } = album;
      return <Album key={index} title={title} />;
    });
  };
  return isLoading ? (
    <Loading />
  ) : error ? (
    <div className={classes.error}>{error}</div>
  ) : (
    <div className={classes.root}>
      <div className={classes.albums}>{showAllAlbums()}</div>
    </div>
  );
};

export default Albums;
