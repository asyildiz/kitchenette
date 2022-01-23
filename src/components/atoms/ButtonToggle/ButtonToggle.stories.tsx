import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import ButtonToggle from "./ButtonToggle";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "kitchenette/ButtonToggle",
  component: ButtonToggle,
} as ComponentMeta<typeof ButtonToggle>;

const Template: ComponentStory<typeof ButtonToggle> = (args) => (
  <ButtonToggle {...args} />
);

export const ExampleButtonToggle = Template.bind({});
ExampleButtonToggle.args = {
  label: "check state",
  type: "success",
};
