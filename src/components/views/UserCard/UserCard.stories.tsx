import {Story} from '@storybook/react';
import {action} from '@storybook/addon-actions';
import {UserCard, UserCardProps} from './UserCard.view';

export default {
    title: 'Components/App/UserCard',
    component: UserCard,
    parameters: {
        layout: 'centered',
    },
};

const Template: Story<UserCardProps> = args => <UserCard {...args} />;

export const Primary = Template.bind({});

Primary.args = {
    name: 'Leanne Graham',
    company: 'Robel-Corkery',
    onClick: action('clicked'),
};
