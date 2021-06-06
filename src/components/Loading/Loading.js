import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import CircularProgress from "@material-ui/core/CircularProgress";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "center",
  },
}));

const Loading = ({ size = 80, thickness = 2, ...rest }) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <CircularProgress size={size} thickness={thickness} {...rest} />
    </div>
  );
};

Loading.propTypes = {
  size: PropTypes.number,
  thickness: PropTypes.element,
};

export default Loading;
