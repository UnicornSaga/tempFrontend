import React from "react";
import "./Homepage.scss";
import { Link, Navigate } from "react-router-dom";
import { Button } from "react-bootstrap";

const Homepage = () => {
    return (
        <>
            <div>
                <h1>Homepage</h1>
                <Button>
                    <Link to="/">Route to Login page</Link>
                </Button>
            </div>
        </>
    )
}

export default Homepage;