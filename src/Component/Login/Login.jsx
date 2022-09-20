import React from "react";
import "./Login.scss";
import { Link, Navigate } from "react-router-dom";
import { Button } from "react-bootstrap";


const Login = () => {
    return (
        <>
            <div>
                <h1>Login page</h1>
                <Button>
                    <Link to="/home">Route to Homepage</Link>
                </Button>
            </div>
        </>
    )
}

export default Login;