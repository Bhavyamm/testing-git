import { Input } from "./Input";

export default {
  title: "Example/Input",
  component: Input,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const RedBorder = {
  args: {
    type: "red-border",
    label: "Type something in red bordered input",
  },
};

export const Default = {
  args: {
    type: "default",
    label: "Type something in default input",
  },
};
