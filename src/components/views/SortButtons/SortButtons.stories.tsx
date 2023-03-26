import {action} from '@storybook/addon-actions';
import {Story} from '@storybook/react';
import {SortButtons, SortButtonsProps} from './SortButtons.view';

export default {
    title: 'Components/Modules/SortButtons',
    component: SortButtons,
    parameters: {
        layout: 'centered',
    },
};

const Template: Story<SortButtonsProps> = args => <SortButtons {...args} />;

export const Primary = Template.bind({});

Primary.args = {
    onClick: action('clicked'),
};
