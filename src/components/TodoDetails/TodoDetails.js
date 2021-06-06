import React from "react";
import PropTypes from "prop-types";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";

const useStyles = makeStyles({
  root: {
    width: 400,
    margin: "20px 0",
  },
  title: {
    fontSize: 18,
    marginRight: 15,
  },
  cardContent: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
});

const TodoDetails = ({ title, completed }) => {
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <CardContent classes={{ root: classes.cardContent }}>
        <Typography variant="h6" component="h2" className={classes.title}>
          {title}
        </Typography>
        {completed && <CheckCircleIcon color="primary" />}
      </CardContent>
    </Card>
  );
};

TodoDetails.propTypes = {
  title: PropTypes.string,
  completed: PropTypes.bool,
};
export default TodoDetails;
