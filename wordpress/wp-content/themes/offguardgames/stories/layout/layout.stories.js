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
storiesOf("Gutenberg Blocks", module).add(
  "Cover Imagezzzzz",
  () =>
    `<div class="wp-block-cover has-background-dim" style="background-image:url(http://offguardwp.lndo.site/wp-content/uploads/2019/07/firefly_2002_1841_poster.png)"><div class="wp-block-cover__inner-container">
    <p style="text-align:center" class="has-large-font-size">Cover Text Cover Text Cover Text Cover Text Cover Text Cover Text Cover Text Cover Text Cover Text </p>
    </div></div>`
);
