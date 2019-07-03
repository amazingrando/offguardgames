import { storiesOf } from "@storybook/html";

const template = require("../templates/test.twig");
// const data = require('./COMPONENT.json');

storiesOf("Test", module).add("default", () => template({ test: "food" }));
