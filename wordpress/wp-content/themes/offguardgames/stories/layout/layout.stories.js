import { storiesOf } from "@storybook/html";
import placeholderText from "../data/typography";

storiesOf("Layout", module).add(
  "Main Layout",
  () => `
  <div class="layout-main">
  <header class="header max-width-container">This is the Header.</header>
  <main class="main max-width-container"><section class="max-width-container__content">${placeholderText}</section></main>
  <footer class="footer">This is <br>the Footer.</footer>
  </div>
  `
);
