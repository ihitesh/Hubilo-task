import React, { useState } from "react";
import PropTypes from "prop-types";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import { makeStyles } from "@material-ui/core/styles";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles({
  root: {
    margin: "0 20px",
  },
  menuItem: () => ({
    color: "grey",
    pointerEvents: "none",
  }),
  button: (props) => ({
    padding: "10px 20px",
    borderRadius: 2,
    textTransform: "none",
    lineHeight: "initial",
    fontSize: 16,
    color: props.isActive ? " white" : "#3f51b5",
    "&:hover": {
      backgroundColor: props.isActive ? "#3f51b5" : "white",
    },
    ...(props.isActive
      ? {
          backgroundColor: "#3f51b5",
          color: "white",
        }
      : {}),
  }),
});

const NavigationDropdown = ({ options, disabled, isActive }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [buttontext, setButtonText] = useState("Menu");
  const history = useHistory();
  const classes = useStyles({ isActive });

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleItemClick = (label, path) => {
    setButtonText(label);
    history.push(path);
    handleClose();
  };
  return (
    <div className={classes.root}>
      <Button
        onClick={handleClick}
        disabled={disabled}
        classes={{ root: classes.button }}
      >
        {buttontext}
      </Button>
      <Menu
        id="users-todos"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        {options.map((option, index) => {
          return (
            <MenuItem
              key={index}
              classes={option.disabled ? { root: classes.menuItem } : {}}
              onClick={() => handleItemClick(option.label, option.path)}
            >
              {option.label}
            </MenuItem>
          );
        })}
      </Menu>
    </div>
  );
};

NavigationDropdown.propTypes = {
  options: PropTypes.arrayOf(PropTypes.object),
  disabled: PropTypes.bool,
  isActive: PropTypes.bool,
};

export default NavigationDropdown;
