import React from "react";
import PropTypes from "prop-types";
import { Redirect, Route } from "react-router-dom";
import appPaths from "../utils/appPaths";

const ProtectedRoute = ({ canRedirect, ...rest }) => {
  return canRedirect ? (
    <Redirect exact to={appPaths.root} />
  ) : (
    <Route {...rest} />
  );
};

ProtectedRoute.propTypes = {
  canRedirect: PropTypes.bool,
  path: PropTypes.string,
  component: PropTypes.elementType,
};

export default ProtectedRoute;
