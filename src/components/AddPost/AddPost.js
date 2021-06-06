import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import { PostActionTypes } from "../../redux/actionCreators";
import Loading from "../Loading/Loading";
import { post } from "../../api/api";

const useStyles = makeStyles({
  error: {
    color: "#ea0b0b",
  },
});

const AddPost = () => {
  const dispatch = useDispatch();
  const classes = useStyles();
  const allPosts = useSelector((state) => state.posts);
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const isValidValues = () => {
    return title && body;
  };

  const addNewPost = async () => {
    const userId = allPosts[0]?.userId ?? 1;
    const payload = { title, body, userId };
    if (isValidValues()) {
      setIsLoading(true);
      setError("");
      try {
        const response = await post("/posts", payload);
        setTitle("");
        setBody("");
        dispatch({
          type: PostActionTypes.ADD,
          payload: { post: [response.data] },
        });
      } catch (e) {
        setError("Error adding post. Please try again.");
      }
      setIsLoading(false);
    } else {
      setError("Please add all values.");
    }
  };

  return (
    <Grid container className={classes.root} spacing={3}>
      <Grid item xs={12}>
        {!!error && <div className={classes.error}>{error}</div>}
      </Grid>
      <Grid container item xs={6} spacing={3}>
        <Grid item xs={12}>
          <TextField
            value={title}
            fullWidth
            id="title"
            label="Title"
            required
            error={!title && !!error}
            helperText="Title cannot be empty."
            onChange={(e) => setTitle(e.target.value)}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            value={body}
            id="body"
            multiline
            rows={2}
            label="Body"
            required
            error={!body && !!error}
            helperText="Body cannot be empty."
            onChange={(e) => setBody(e.target.value)}
          />
        </Grid>
      </Grid>
      <Grid container item xs={6} alignItems="center">
        {isLoading ? (
          <Loading size={40} />
        ) : (
          <Grid item xs={12}>
            <Button variant="contained" color="primary" onClick={addNewPost}>
              Add Post
            </Button>
          </Grid>
        )}
      </Grid>
    </Grid>
  );
};

export default AddPost;
