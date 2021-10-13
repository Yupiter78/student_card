import React from "react";
import PropTypes from "prop-types";

const TextField = ({ label, type, name, value, error, min, onChange }) => {
    const getInputClasses = () => {
        return "form-control" + (error ? " is-invalid" : "");
    };
    return (
        <div className="mb-1">
            <label htmlFor={name} className="form-label">
                {label}
            </label>
            <input
                type={type}
                className={getInputClasses()}
                id={name}
                name={name}
                value={value}
                min={min}
                onChange={onChange}
            />
            {error && <div className="invalid-feedback">{error}</div>}
        </div>
    );
};

TextField.defaultProps = {
    type: "text"
};
TextField.propTypes = {
    label: PropTypes.string,
    type: PropTypes.string,
    name: PropTypes.string,
    value: PropTypes.string,
    error: PropTypes.string,
    min: PropTypes.string,
    onChange: PropTypes.func
};

export default TextField;
