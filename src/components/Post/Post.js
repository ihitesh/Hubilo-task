import React from "react";
import PropTypes from "prop-types";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    width: 400,
    margin: "20px 0",
  },
  title: {
    fontSize: 18,
    marginBottom: 15,
  },
});

const Post = ({ title, body }) => {
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography variant="h5" component="h2" className={classes.title}>
          {title}
        </Typography>
        <Typography color="textSecondary">{body}</Typography>
      </CardContent>
    </Card>
  );
};

Post.propTypes = {
  title: PropTypes.string,
  body: PropTypes.string,
};

export default Post;
