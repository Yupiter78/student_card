import React from "react";
import { Link } from "react-router-dom";

const Card = () => {
    if (localStorage.getItem("student")) {
        const { firstName, lastName, yearOfBirth, email, portfolio } =
            JSON.parse(localStorage.getItem("student"));
        const age =
            new Date().getFullYear() - new Date(yearOfBirth)?.getFullYear();
        return (
            <div className="card offset-md-3 col-md-6 shadow mt-5 p-3 mx-auto">
                <div className="card-body mx-auto">
                    <h5 className="card-title">Student card</h5>
                    <p className="card-subtitle mb-1 text-muted">
                        <span className="fw-bold me-1">First name:</span>{" "}
                        {firstName}
                    </p>
                    <p className="card-subtitle mb-1 text-muted">
                        <span className="fw-bold me-1">Last name:</span>{" "}
                        {lastName}
                    </p>
                    <p className="card-subtitle mb-1 text-muted">
                        <span className="fw-bold me-1">Year of birth:</span>{" "}
                        {yearOfBirth} ({age} years)
                    </p>
                    <p className="card-subtitle mb-2 text-muted">
                        <span className="fw-bold me-1">Email:</span> {email}
                    </p>
                    <p className="card-subtitle mb-2 text-muted">
                        <span className="fw-bold me-1">Portfolio link:</span>{" "}
                        {portfolio}
                    </p>

                    <Link to="/edit" type="button" className="btn btn-primary">
                        Edit
                    </Link>
                </div>
            </div>
        );
    }
    return (
        <div className="card w-50 shadow mx-auto">
            <div className="card-body shadow">
                <h5 className="card-title">Student card</h5>
                <p className="fs-5">No student data</p>

                <Link to="/edit" type="button" className="btn btn-primary">
                    Create
                </Link>
            </div>
        </div>
    );
};

export default Card;
