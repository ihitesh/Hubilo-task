import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import { PostActionTypes } from "../../redux/actionCreators";
import { Post, Loading, AddPost } from "../../components";
import { useAsyncFetch } from "../../hooks";

const useStyles = makeStyles({
  root: {
    padding: "20px 40px",
  },
  posts: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  error: {
    color: "#ea0b0b",
    textAlign: "center",
  },
});

const Posts = () => {
  const dispatch = useDispatch();
  const classes = useStyles();

  // Keeping Posts in redux because when we create a new post, our API does not store that in database, so when we get all posts data again we will not get posts created by us (If we keep it in local state).
  const allPosts = useSelector((state) => state.posts);

  const onSuccess = (posts) => {
    dispatch({ type: PostActionTypes.SAVE, payload: { posts } });
  };
  const shouldRefetch = !allPosts.length;
  const [isLoading, error] = useAsyncFetch("/posts", onSuccess, shouldRefetch);

  const showAllPosts = () => {
    return allPosts.map((post, index) => {
      const { title, body } = post;
      return <Post key={index} title={title} body={body} />;
    });
  };

  return isLoading ? (
    <Loading />
  ) : error ? (
    <div className={classes.error}>{error}</div>
  ) : (
    <div className={classes.root}>
      <AddPost />
      <div className={classes.posts}>{showAllPosts()}</div>
    </div>
  );
};

export default Posts;
