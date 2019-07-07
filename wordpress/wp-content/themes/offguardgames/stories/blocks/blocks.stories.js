import { storiesOf } from "@storybook/html";

storiesOf("Gutenberg Blocks", module).add(
  "Image",
  () =>
    `<figure class="wp-block-image"><img src="http://offguardwp.lndo.site/wp-content/uploads/2019/07/firefly_2002_1841_poster.png" alt="" class="wp-image-35" srcset="http://offguardwp.lndo.site/wp-content/uploads/2019/07/firefly_2002_1841_poster.png 917w, http://offguardwp.lndo.site/wp-content/uploads/2019/07/firefly_2002_1841_poster-300x131.png 300w, http://offguardwp.lndo.site/wp-content/uploads/2019/07/firefly_2002_1841_poster-768x335.png 768w" sizes="(max-width: 917px) 100vw, 917px"><figcaption>This is a caption.</figcaption></figure>`
);
