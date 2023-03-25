import {Story} from '@storybook/react';
import {ClickableCard, ClickableCardProps} from './ClickableCard.view';

export default {
    title: 'Components/Modules/ClickableCard',
    component: ClickableCard,
    parameters: {
        layout: 'centered',
    },
};

const Template: Story<ClickableCardProps> = args => <ClickableCard {...args} />;

export const Primary = Template.bind({});

Primary.args = {
    children: <div>Card</div>,
};
