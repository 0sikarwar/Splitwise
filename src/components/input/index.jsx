import React, { useState } from "react";

const Input = ({
  onSubmit,
  button,
  buttonClassName,
  label,
  labelClassName,
  onChange,
  className,
  ...otherProps
}) => {
  const _onChange = e => {
    const val = e.currentTarget.value;
    const name = e.currentTarget.name;
    onChange(val, name);
  };
  return (
    <div className="inputBox">
      <If condition={label}>
        <label className={labelClassName}>{label}</label>
      </If>
      <input className={className} {...otherProps} onChange={_onChange} />
      <If condition={onSubmit}>
        <button onClick={onSubmit} className={buttonClassName}>
          {button}
        </button>
      </If>
    </div>
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
