import React, { useState } from "react";

const Input = ({
  onSubmit,
  button,
  buttonClassName,
  label,
  labelClassName,
  onChange,
  ...otherProps
}) => {
  const _onChange = e => {
    const val = e.currentTarget.value;
    const name = e.currentTarget.name;
    onChange(val, name);
  };
  return (
    <>
      <If condition={label}>
        <label className={labelClassName}>{label}</label>
      </If>
      <input {...otherProps} onChange={_onChange} />
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
