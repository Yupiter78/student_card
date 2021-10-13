import React from "react";
import { Link } from "react-router-dom";

const Card = () => {
    if (localStorage.getItem("student")) {
        const { firstName, lastName, yearOfBirth, email, portfolio } =
            JSON.parse(localStorage.getItem("student"));
        const age =
            new Date().getFullYear() - new Date(yearOfBirth)?.getFullYear();
        return (
            <div className="card w-50 shadow mx-auto">
                <div className="card-body shadow">
                    <h5 className="card-title">Student card</h5>
                    <h6 className="card-subtitle mb-2 text-muted">
                        First name: {firstName} Last name: {lastName}
                    </h6>
                    <p className="card-text">
                        Year of birth: {yearOfBirth} ({age} years)
                    </p>
                    <h6 className="card-subtitle mb-2 text-muted">
                        Email: {email}
                    </h6>
                    <h6 className="card-subtitle mb-2 text-muted">
                        Portfolio link: {portfolio}
                    </h6>

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
