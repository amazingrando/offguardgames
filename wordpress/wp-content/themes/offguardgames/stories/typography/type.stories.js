import { storiesOf } from "@storybook/html";
import placeholderText from "../data/typography";

storiesOf("Typography", module).add("Full", () => placeholderText);
storiesOf("Typography", module).add(
  "Blockquote",
  () =>
    `<blockquote class="wp-block-quote"><p>Nam et tempor dui, eget viverra purus. Morbi egestas tincidunt velit, vel aliquam lorem sagittis vel. Proin placerat lorem ac mi accumsan, vitae malesuada massa rutrum.</p><cite>— Randy</cite></blockquote>`
);
