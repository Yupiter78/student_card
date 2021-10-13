import React from "react";
import PropTypes from "prop-types";

const TextField = ({
    label,
    type = "text",
    name,
    value,
    error,
    min,
    onChange
}) => {
    return (
        <div className="mb-1">
            <label htmlFor={name} className="form-label">
                {label}
            </label>
            <input
                type={type}
                className={`form-control${error ? " is-invalid" : ""}`}
                id={name}
                name={name}
                value={value}
                min={min}
                onChange={onChange}
            />
            {error ? (
                <div className="invalid-feedback">{error}</div>
            ) : (
                <div style={{ color: "transparent" }}>Not error</div>
            )}
        </div>
    );
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
