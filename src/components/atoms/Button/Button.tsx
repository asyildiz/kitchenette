import React from "react";
import classNames from 'classnames/bind';
import './Button.scss';

interface ButtonProps {
  label?: string;
  disabled?: boolean;
  extraClass?: string;
  type?: 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'dark' | 'link';
  fullWidth?: boolean;
}

const Button = (props: ButtonProps) => {
    let buttonClass = classNames('kn-button', props.type, { 'disabled': props.disabled, 'full-width': props.fullWidth }, props.extraClass);

    return <button className={buttonClass} disabled={props.disabled}>{props.label}</button>
}

Button.defaultProps = {
    label: 'Lorem ipsum',
    disabled: false,
    type: 'primary',
    fullWidth: false
}

export default Button;
