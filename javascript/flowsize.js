$(function(){

      flowtype = function(options){

            var settings = $.extend({
               maximum : 9999,
               minimum : 1,
               maxFont : 9999,
               minFont : 1,
            }, options);

            changes = function(el){
               var $el = $(el),
                  elw = $el.width(),
                  elh = $el.height(),
                  width = elw > settings.maximum ? settings.maximum : elw < settings.minimum ? settings.minimum : elw,
                  height = elh > settings.maximum ? settings.maximum : elh < settings.minimum ? settings.minimum : elh,
                  fontvol = $el.text().length,
                  fontsiz= 0,
                  tate = 0,
                  yoko = 0,
                  fontRatio = 0,
                  fontBase = 0,
                  top = 0,
                  fontSize = 0;

                  for(var i = 0; fontsiz <= fontvol; i++){
                        tate = height / i;
                        yoko = width / tate;
                        fontsiz = yoko * i;
                  };

                  fontRatio = yoko + 1,
                  fontBase = width / fontRatio,
                  fontSize = fontBase > settings.maxFont ? settings.maxFont : fontBase < settings.minFont ? settings.minFont : fontBase,
                  top = 0 - fontSize;
               $el.css('font-size', fontSize + 'px');
               $el.css('top', top + 'px');
            };

      // Make the magic visible
      // ======================
            return this.each(function() {
            // Context for resize callback
               var that = this;
            // Make changes upon resize
               $(window).resize(function(){changes(that);});
            // Set changes on load
               changes(this);
            });
         };
      }(jQuery));