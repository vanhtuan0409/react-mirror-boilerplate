import React from "react";
import { Route } from "mirrorx";

export default ({ layout: Layout, component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props => {
      if (!Layout) return <Component {...props} />;
      return (
        <Layout>
          <Component {...props} />
        </Layout>
      );
    }}
  />
);
