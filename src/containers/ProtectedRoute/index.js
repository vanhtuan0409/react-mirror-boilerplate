import React from "react";
import { Route, Redirect } from "mirrorx";
import AuthApi from "@src/apis/AuthApi";

export default ({ layout: Layout, component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props => {
      const isAuthenticated = AuthApi.isAuthenticated();
      const shouldLayout = !!Layout;

      // Dont have layout
      if (isAuthenticated && !shouldLayout) {
        return <Component {...props} />;
      }
      // Have layout
      if (isAuthenticated && shouldLayout) {
        return (
          <Layout>
            <Component {...props} />
          </Layout>
        );
      }

      // Not authenticated
      return (
        <Redirect
          to={{
            pathname: "/login",
            state: { from: props.location }
          }}
        />
      );
    }}
  />
);
