import React from "react";
import { Link, useHistory } from "react-router-dom";
import { getValueFromStorage, getContent, getAge } from "../utils/dataStore";

const Card = () => {
    if (getContent("student")) {
        const { firstName, lastName, yearOfBirth, email, portfolio } =
            getValueFromStorage("student");
        const age = getAge(yearOfBirth);
        const getEndingOfWord = (age) => {
            return age === 1 ? "year" : "years";
        };
        const history = useHistory();
        const handleClearLocalStorage = () => {
            localStorage.clear();
            history.push("/");
        };

        return (
            <div className="card offset-md-3 col-md-5 shadow mt-5 p-3 mx-auto">
                <div className="card-body shadow">
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
                        {yearOfBirth} ({age} {getEndingOfWord(age)})
                    </p>
                    <p className="card-subtitle mb-2 text-muted">
                        <span className="fw-bold me-1">Email:</span> {email}
                    </p>
                    <p className="card-subtitle mb-2 text-muted">
                        <span className="fw-bold me-1">Portfolio link:</span>{" "}
                        {portfolio}
                    </p>

                    <Link
                        to="/edit"
                        type="button"
                        className="btn btn-primary me-5"
                    >
                        Edit
                    </Link>
                    <button
                        type="button"
                        className="btn btn-primary ms-5"
                        onClick={handleClearLocalStorage}
                    >
                        Clear
                    </button>
                </div>
            </div>
        );
    }
    return (
        <div className="card offset-md-3 col-md-6 shadow mt-5 p-3 mx-auto">
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
