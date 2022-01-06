import React from "react";
import classNames from 'classnames/bind';
import './Badge.scss';

interface BadgeProps {
    extraClass?: string;
    children?: string;
    type?: 'primary' | 'secondary';
}

const Badge = (props: BadgeProps) => {
    let badgeClass = classNames('kn-badge', props.type, props.extraClass);

    return <span className={badgeClass}>{props.children}</span>
}

Badge.defaultProps = {
    extraClasses: '',
    children: 'Lorem ipsum',
    type: 'primary',
}

export default Badge;
