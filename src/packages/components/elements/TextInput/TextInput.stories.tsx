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
export const Password = Template.bind({});
export const Placeholder = Template.bind({});

Text.args = {
    value: 'Some text',
};

Password.args = {
    type: 'password',
    value: '123456',
};

Placeholder.args = {
    placeholder: 'Type user name to filter',
};
