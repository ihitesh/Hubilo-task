import React from "react";
import PropTypes from "prop-types";
import NavigationBar from "../NavigationBar/NavigationBar";

const Layout = (props) => {
  return (
    <div>
      <NavigationBar />
      {props.children}
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.element,
};

export default Layout;
