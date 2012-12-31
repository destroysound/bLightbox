bLightbox
=========

I was surprised after going through different lightbox solutions that I couldn't find a simple one that fit my very basic needs: show Youtube links and images in a mobile-friendly way, cross platform with modern browsers, iPhone and Android devices. So, here is bLightbox: a minimalistic HTML5-ready lightbox which supports Youtube and Vimeo embedding and mobile devices.

Prerequisites
=============

- JQuery
- JQueryUI

Usage
=====

See example.html, but basically:

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

http://spiritualtazer.com/bLightbox/example.html

Todo
====

- Allow optional width and height parameters.
- Style images with dropdown shadow to indicate they link off to a bLightbox.
