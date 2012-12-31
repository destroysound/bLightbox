bLightbox
=========

A minimalistic HTML5-ready lightbox which supports Youtube and Vimeo embedding and mobile devices.

Prerequisites
=============

- JQuery
- JQueryUI

Usage
=====

$(document).ready(function () {
  $(".vid-lightbox").blightbox();
});

Each bLightbox is expected to have one of the following data tags:

- data-video: the Youtube Video ID
- data-vimeo: the Vimeo Video ID
- data-image: the image to show

Examples:

```HTML
<img src="http://spiritualtazer.com/images/endo.png" class="vid-lightbox" data-video="AOihsC-WBDE"/>
<img src="http://spiritualtazer.com/images/beeple1.png" class="vid-lightbox" data-vimeo="46239685"/>
<img src="http://spiritualtazer.com/images/xavi-thumbnail.png" class="vid-lightbox" data-image="http://spiritualtazer.com/images/xavi-full.png"/>
```
