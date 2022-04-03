import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Ticket from './Ticket';

export default {
    title: 'kitchenette/Ticket',
    component: Ticket,
} as ComponentMeta<typeof Ticket>;

const Template: ComponentStory<typeof Ticket> = (args) => <Ticket {...args} />;

export const ExampleTicket = Template.bind({});
ExampleTicket.args = {
};