import React, { Suspense } from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import { Loading } from "../../components";
import { useSelector } from "react-redux";
import appPaths from "../../utils/appPaths";
import { ProtectedRoute } from "../../hoc";

const Posts = React.lazy(() => import("../Posts/Posts"));
const Albums = React.lazy(() => import("../Albums/Albums"));
const Users = React.lazy(() => import("../Users/Users"));
const Todos = React.lazy(() => import("../Todos/Todos"));

const Dashboard = () => {
  const { posts, albums, users } = useSelector((state) => state);

  return (
    <Suspense fallback={<Loading />}>
      <Switch>
        <Route path={appPaths.posts} component={Posts} />
        <ProtectedRoute
          path={appPaths.albums}
          component={Albums}
          canRedirect={posts.length === 0}
        />
        <ProtectedRoute
          path={appPaths.users}
          component={Users}
          canRedirect={albums.length === 0}
        />
        <ProtectedRoute
          path={appPaths.todos}
          component={Todos}
          canRedirect={users.length === 0}
        />
        <Redirect from="/" to={appPaths.root} />
      </Switch>
    </Suspense>
  );
};

export default Dashboard;
