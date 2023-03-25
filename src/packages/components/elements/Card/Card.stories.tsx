import {Story} from '@storybook/react';
import {Card, CardProps} from './Card.view';

export default {
    title: 'Components/Elements/Card',
    component: Card,
    parameters: {
        layout: 'centered',
    },
};

const Template: Story<CardProps> = args => <Card {...args} />;

export const Primary = Template.bind({});

Primary.args = {
    children: <div>Card</div>,
};
