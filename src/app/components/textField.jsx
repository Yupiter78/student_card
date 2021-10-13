import React from "react";

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

export default TextField;
