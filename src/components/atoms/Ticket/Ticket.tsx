import React from "react";
import classNames from 'classnames/bind';
import './Ticket.scss';

interface TicketProps {
    extraClass?: string;
    children?: string;
    type?: 'primary' | 'secondary' | 'success';
}

const Ticket = (props: TicketProps) => {
    let ticketClass = classNames('kn-ticket', props.type, props.extraClass);

    return <span className={ticketClass}>{props.children}</span>
}

Ticket.defaultProps = {
    extraClasses: '',
    children: 'Lorem ipsum',
    type: 'success',
}

export default Ticket;
