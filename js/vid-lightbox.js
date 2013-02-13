(function($){

  $.widget("ui.blightbox", {
    _create: function(){

      // by default, consider this thing closed.
      this._isOpen = false;

      $('body').append("<div id=\"inline1\" style=\"display: none;\"></div>");

      $( "#inline1" ).dialog({
          autoOpen: false,
          modal: true,
          resizable: false,
          width: 640,
          bgiframe: true,
      open: function(event, ui) {
        $('.ui-widget-overlay').bind('click', function(){
          $("#inline1").dialog('close');
          $("#inline1").html("");
        }); }
      });
      $('#inline1').dialog('option', 'dialogClass', 'alert');
      $( "#inline1" ).dialog('option', 'position', 'center');

      $(this.element).click(function (element) {
        if ($(this).data("vimeo")) {
          $( "#inline1" ).html("<iframe src='http://player.vimeo.com/video/" + $(this).data("vimeo") + "' width='640' height='385' frameborder='0' webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe>");
          $("#inline1").dialog('open');
        }
        else if ($(this).data("video")) {
           $( "#inline1" ).html("<iframe class='youtube-player' type='text/html' width='640' height='385' src='http://www.youtube.com/embed/" + $(this).data("video") + "' frameborder='0'></iframe>");
          $("#inline1").dialog('open');
        }
        else if ($(this).data("image")) {
          $( "#inline1" ).html("<img id='lightboximage' src='" + $(this).data("image") + "' width='640' />");
          $("#lightboximage").load($("#inline1").dialog('open'));
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

