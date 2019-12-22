import React, { useState } from "react";

const Input = props => {
  const {
    label,
    className,
    onChange,
    value,
    labelClassName,
    onSubmit,
    button,
    buttonClassName,
    type,
    placeholder,
    name
  } = props;
  const _onChange = e => {
    const val = e.currentTarget.value;
    onChange(val, name);
  };
  return (
    <>
      <If condition={label}>
        <label className={labelClassName}>{label}</label>
      </If>
      <input
        className={className}
        type={type}
        name={name}
        value={value}
        onChange={_onChange}
        placeholder={placeholder}
      />
      <If condition={onSubmit}>
        <button onClick={onSubmit} className={buttonClassName}>
          {button}
        </button>
      </If>
    </>
  );
};

Input.defaultProps = {
  label: "",
  className: "",
  onChange: () => {},
  value: "",
  labelClassName: "",
  button: "submit",
  onSubmit: null,
  buttonClassName: "",
  type: "text",
  placeholder: "",
  name: ""
};

export default Input;
