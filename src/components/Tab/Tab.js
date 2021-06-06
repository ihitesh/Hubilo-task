import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Badge from "@material-ui/core/Badge";

const useStyles = makeStyles({
  root: (props) => ({
    padding: "10px 20px",
    backgroundColor: props.active ? "#3f51b5" : "white",
    borderRadius: 2,
  }),
  link: (props) => {
    return {
      textDecoration: "none",
      color: props.active ? "white" : "#3f51b5",
      "&:active": {
        color: "#3f51b5",
      },
      ...(props.disabled
        ? {
            color: "grey",
            pointerEvents: "none",
          }
        : {}),
    };
  },
});

const badgeStyles = makeStyles({
  root: (props) => ({
    margin: "0 20px",
  }),
  badge: {
    top: 5,
    right: 7,
  },
});

const Tab = ({ title, goTo, active, disabled, count }) => {
  const classes = useStyles({ active, disabled });
  const badgeClasses = badgeStyles();
  return (
    <Badge
      badgeContent={count}
      color="secondary"
      max={200}
      classes={badgeClasses}
    >
      <span className={classes.root}>
        <Link className={classes.link} to={goTo}>
          {title}
        </Link>
      </span>
    </Badge>
  );
};

Tab.propTypes = {
  title: PropTypes.string,
  goTo: PropTypes.string,
  active: PropTypes.bool,
  disabled: PropTypes.bool,
  count: PropTypes.number,
};

export default Tab;
