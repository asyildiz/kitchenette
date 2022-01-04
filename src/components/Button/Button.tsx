import React from "react";
import './Button.css';

interface ButtonProps {
  label?: string;
  disabled?: boolean;
}

const Button = (props: ButtonProps) => {
    return <button disabled={props.disabled}>{props.label}</button>
}

Button.defaultProps = {
    label: 'Lorem ipsum',
    disabled: false
}

export default Button;
