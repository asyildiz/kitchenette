import React from "react";
import './Button.scss';

interface ButtonProps {
  label?: string;
  disabled?: boolean;
  type?: 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'light' | 'dark' | 'link',
}

const Button = (props: ButtonProps) => {
    return <button className={props.type} disabled={props.disabled}>{props.label}</button>
}

Button.defaultProps = {
    label: 'Lorem ipsum',
    disabled: false,
    type: 'primary',
}

export default Button;
