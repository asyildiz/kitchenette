import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Badge from './Badge';

export default {
    title: 'kitchenette/Badge',
    component: Badge,
} as ComponentMeta<typeof Badge>;

const Template: ComponentStory<typeof Badge> = (args) => <Badge {...args} />;

export const ExampleBadge = Template.bind({});
ExampleBadge.args = {
};