import React, { useEffect, useState } from "react";
import TextField from "../components/textField";
import { validator } from "../utils/validator";
import { useHistory } from "react-router-dom";

const Edit = () => {
    const [data, setData] = useState(
        JSON.parse(localStorage.getItem("student")) || {
            firstName: "",
            lastName: "",
            yearOfBirth: "",
            email: "",
            portfolio: ""
        }
    );
    const history = useHistory();
    const handleSave = () => {
        history.push("/");
    };
    const [errors, setErrors] = useState({});
    const handleChange = ({ target }) => {
        setData((prevState) => ({
            ...prevState,
            [target.name]: target.value
        }));
    };

    const validatorConfig = {
        firstName: {
            isRequired: { message: "first name isRequired" },
            min: {
                message: "First name must be at least 2 characters long",
                value: 2
            }
        },
        lastName: {
            isRequired: { message: "last name isRequired" },
            min: {
                message: "last name must be at least 2 characters long",
                value: 2
            }
        },
        yearOfBirth: {
            isRequired: { message: "Year of birth is required" },
            isValidYear: {
                message: "Field year of birth is filled in incorrectly"
            }
        },
        email: {
            isRequired: { message: "email isRequired" },
            isEmail: { message: "Email entered incorrectly" }
        },
        portfolio: {
            isRequired: { message: "portfolio isRequired" },
            isLink: { message: "Portfolio field must be a link" }
        }
    };
    useEffect(() => {
        validate();
    }, [data]);
    const validate = () => {
        const errors = validator(data, validatorConfig);
        setErrors(errors);
        return Object.keys(errors).length === 0;
    };
    const isValid = Object.keys(errors).length === 0;
    const handleSubmit = (event) => {
        event.preventDefault();
        const isValid = validate();
        if (!isValid) return;
        localStorage.setItem("student", JSON.stringify(data));
    };
    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col-md-6 offset-md-3 shadow p-4">
                    <h3 className="mb-4">Login</h3>
                    <form onSubmit={handleSubmit}>
                        <TextField
                            label="First name"
                            name="firstName"
                            value={data.firstName}
                            onChange={handleChange}
                            error={errors.firstName}
                        />
                        <TextField
                            label="Last name"
                            name="lastName"
                            value={data.lastName}
                            onChange={handleChange}
                            error={errors.lastName}
                        />
                        <TextField
                            label="Year of birth"
                            name="yearOfBirth"
                            value={data.yearOfBirth}
                            onChange={handleChange}
                            error={errors.yearOfBirth}
                        />
                        <TextField
                            label="Email"
                            name="email"
                            value={data.email}
                            onChange={handleChange}
                            error={errors.email}
                        />
                        <TextField
                            label="Portfolio"
                            name="portfolio"
                            value={data.portfolio}
                            onChange={handleChange}
                            error={errors.portfolio}
                        />

                        <button
                            type="submit"
                            onClick={handleSave}
                            onMouseDown={handleSubmit}
                            disabled={!isValid}
                            className="btn btn-primary w-100 mx-auto"
                        >
                            Create
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Edit;
