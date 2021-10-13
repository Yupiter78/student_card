import React from "react";
import { Link } from "react-router-dom";
import Card from "../components/card";

const Home = () => {
    return (
        <>
            {!JSON.parse(localStorage.getItem("student")) ? (
                <div className="row">
                    <div className="text-center p-5">
                        <h1>Student Card</h1>
                        <p className="fs-5">No student data</p>
                        <Link
                            className="btn btn-outline-primary px-5"
                            to="/edit"
                        >
                            Add
                        </Link>
                    </div>
                </div>
            ) : (
                <Card />
            )}
        </>
    );
};

export default Home;
