import {action} from '@storybook/addon-actions';
import {Story} from '@storybook/react';
import {GroupButtons, SortButtonsProps} from './GroupButtons.view';

export default {
    title: 'Components/Modules/SortButtons',
    component: GroupButtons,
    parameters: {
        layout: 'centered',
    },
};

const Template: Story<SortButtonsProps> = args => <GroupButtons {...args} />;

export const Primary = Template.bind({});

Primary.args = {
    groupButtons: [
        {id: '1', text: 'Name', value: 'user-name', selected: true},
        {id: '2', text: 'Company', value: 'company-name', selected: false},
        {id: '3', text: 'City', value: 'city-name', selected: false},
    ],
    onClick: action('clicked'),
};
