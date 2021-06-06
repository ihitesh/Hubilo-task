import React from "react";
import appPaths from "../../utils/appPaths";
import Tab from "../Tab/Tab";
import { makeStyles } from "@material-ui/core/styles";
import { useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import NavigationDropdown from "../NavigationDropdown/NavigationDropdown";

const useStyles = makeStyles({
  root: {
    padding: 20,
    display: "flex",
    justifyContent: "center",
  },
});

const NavigationBar = () => {
  const location = useLocation();
  const totalPosts = useSelector((state) => state.posts.length);
  const totalAlbums = useSelector((state) => state.albums.length);
  const totalUsers = useSelector((state) => state.users.length);
  const classes = useStyles();

  const isActive = (url) => {
    return location.pathname.includes(url);
  };

  const isDropdownActive = (options) => {
    for (let option of options) {
      if (location.pathname.includes(option.path)) {
        return true;
      }
    }

    return false;
  };

  const navigationLinks = [
    {
      label: "Posts",
      path: appPaths.posts,
      count: totalPosts,
      disabled: false,
    },
    {
      label: "Albums",
      path: appPaths.albums,
      count: totalAlbums,
      disabled: !totalPosts,
    },
  ];

  const options = [
    {
      label: "Users",
      path: appPaths.users,
      disabled: !totalAlbums,
    },
    {
      label: "Todos",
      path: appPaths.todos,
      disabled: !totalUsers,
    },
  ];

  return (
    <div className={classes.root}>
      {navigationLinks.map((link, index) => {
        const { path, label, disabled, count } = link;
        return (
          <Tab
            key={index}
            active={isActive(path)}
            goTo={path}
            title={label}
            disabled={disabled}
            count={count}
          />
        );
      })}
      <NavigationDropdown
        options={options}
        disabled={!totalAlbums}
        isActive={isDropdownActive(options)}
      />
    </div>
  );
};

export default NavigationBar;
