import { storiesOf } from "@storybook/html";

const template = require("../templates/test.twig");

storiesOf("Test", module).add("default", () => template({ test: "food" }));
