import React, { InputHTMLAttributes, useState } from "react";
import "./ButtonToggle.scss";

interface ButtonToggleProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  disabled?: boolean;
  id?: string;
  activeText?: string;
  inActiveText?: string;
}

const ButtonToggle = (props: ButtonToggleProps): JSX.Element => {
  const {
    id,
    disabled,
    label,

    activeText,
    inActiveText,

    onChange,
  } = props;
  const [isChecked, setIsChecked] = useState<boolean>(false);
  const baseClassName = "button-toggle-wrapper";

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (disabled) return;
    const { checked } = e.target;
    console.log(checked);
    setIsChecked(checked);
    if (onChange) {
      onChange(e);
    }
  };
  return (
    <div className={baseClassName} id={id}>
      {label}
      <div className={`toggle-switch `}>
        <input
          type="checkbox"
          className="checkbox"
          name={label}
          id={label}
          onChange={handleChange}
          disabled={disabled}
        />
        <label className="label" htmlFor={label}>
          <span className={`${isChecked ? "active" : "inActive"} inner`}>
            <div className={`text ${disabled ? "disabled" : ""} `}>
              {isChecked ? activeText : inActiveText}
            </div>
          </span>
          <span className="switch" />
        </label>
      </div>
    </div>
  );
};

ButtonToggle.defaultProps = {
  label: "Lorem ipsum",
  disabled: false,
  id: "toggle",
  activeText: "YES",
  inActiveText: "NO",
};
ButtonToggle.displayName = "ButtonToggle";

export default ButtonToggle;
