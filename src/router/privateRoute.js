import React from "react";
import { Navigate } from "react-router-dom";
import { AllRoutes } from "./router";

const PrivateRoute = (props) => {
    const isLoggedIn = () => {
        return localStorage.getItem("authToken") ? true : false;
    };

    return isLoggedIn() ? (
        props.children
    ) : (
        <Navigate
            to={AllRoutes.login}
            state={{ from: props.path }}
        />
    );
};

export default PrivateRoute;
