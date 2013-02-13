(function($){

  $.widget("ui.blightbox", {
    _create: function(){

      // by default, consider this thing closed.
      this._isOpen = false;


      var width = 640;
      if ($(this.elementt).data("boxwidth")) {
        width = $(this).data("boxwidth");
      }

      var height = 385;
      if ($(this.element).data("boxheight")) {
        height = $(this).data("boxheight");
      }
      $(this.element).addClass("vid-lightbox");

      var autoplay = false;
      if ('autoplay' in this.options) {
        autoplay = true;
      }


      $(this.element).click(function (element) {
        $('body').prepend("<div style=\"position: absolute; top: 0px; left: 0px;\"><div id=\"inline1\" style=\"display: none;\"></div></div>");
        var create_and_open_dialog = function () {

          $( "#inline1" ).dialog({
              autoOpen: false,
              modal: true,
              resizable: false,
              width: width,
              bgiframe: true,
          open: function(event, ui) {
            $('.ui-widget-overlay').bind('click', function(){
              $("#inline1").dialog('close');
              $("#inline1").remove();
              $("#loading").remove();
            }); }
          });
          $('#inline1').dialog('option', 'dialogClass', 'alert');
          $('#inline1').dialog('option', 'position', ['center', 'center']);
          $('#inline1').dialog('open');
          $(window).resize(function() {
            $("#inline1").dialog("option", "position", ['center', 'center']);
          });
        }
        if ($(this).data("vimeo")) {
          params = "";
          if (autoplay) {
            params = params + "autoplay=1";
          }
          $("#inline1").html("<iframe src='http://player.vimeo.com/video/" + $(this).data("vimeo") + "?" + params + "' width='" + width + "' height='" + height + "' frameborder='0' webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe>");
          create_and_open_dialog();
        }
        else if ($(this).data("video")) {
          params = "";
          if (autoplay) {
            params = params + "autoplay=1";
          }
           $("#inline1").html("<iframe class='youtube-player' type='text/html' width='" + width + "' height='" + height + "' src='http://www.youtube.com/embed/" + $(this).data("video") + "?" + params + "' frameborder='0'></iframe>");
          create_and_open_dialog();
        }
        else if ($(this).data("image")) {
          if ($(this).data("boxheight")) {
            $("#inline1").html("<img id='lightboximage' src='" + $(this).data("image") + "' width='" + width + "' height='" + height + "' />");
          }
          else {
            $("#inline1").html("<img id='lightboximage' src='" + $(this).data("image") + "' width='" + width + "' />");
          }
          $("#lightboximage").on("load", function () {
            $("#inline1").dialog("option", "position", ['center', 'center']);
            create_and_open_dialog();
          });
        }
      });


       // remember this instance
      $.ui.blightbox.instances.push(this.element);
    },

    _init: function(){

    },

    destroy: function(){
      // remove this instance from $.ui.blightbox.instances
      var element = this.element,
        position = $.inArray(element, $.ui.blightbox.instances);

      // if this instance was found, splice it off
      if(position > -1){
        $.ui.blightbox.instances.splice(position, 1);
      }

      // call the original destroy method since we overwrote it
      $.Widget.prototype.destroy.call( this );
    },

    _getOtherInstances: function(){
      var element = this.element;

      return $.grep($.ui.blightbox.instances, function(el){
        return el !== element;
      });
    },

    _setOption: function(key, value){
      this.options[key] = value;

    }
  });

  $.extend($.ui.blightbox, {
    instances: []
  });

})(jQuery);

