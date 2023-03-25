import {Story} from '@storybook/react';
import {TextInput, TextInputProps} from './TextInput.view';

export default {
    title: 'Components/Elements/TextInput',
    component: TextInput,
    parameters: {
        layout: 'centered',
    },
};

const Template: Story<TextInputProps> = args => <TextInput {...args} />;

export const Text = Template.bind({});

Text.args = {
    type: 'text',
};
