import React from "react";
import auth from "@src/apis/AuthApi";

export default Component => props => <Component {...props} auth={auth} />;
