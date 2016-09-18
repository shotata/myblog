/*
* FlowType.JS v1.1
* Copyright 2013-2014, Simple Focus http://simplefocus.com/
*
* FlowType.JS by Simple Focus (http://simplefocus.com/)
* is licensed under the MIT License. Read a copy of the
* license in the LICENSE.txt file or at
* http://choosealicense.com/licenses/mit
*
* Thanks to Giovanni Difeterici (http://www.gdifeterici.com/)
*/

(function($) {
   $.fn.flowtype = function(options){

// Establish default settings/variables
// ====================================
      var settings = $.extend({
         maximum : 9999,
         minimum : 1,
         maxFont : 9999,
         minFont : 1,
      }, options);

// Do the magic math
// =================

      changes = function(el){
         var $el = $(el),
            elw = $el.width(),
            elh = $el.height(),
            width = elw > settings.maximum ? settings.maximum : elw < settings.minimum ? settings.minimum : elw,
            height = elh > settings.maximum ? settings.maximum : elh < settings.minimum ? settings.minimum : elh,
            lenori = $el.text(),
            len = 0,
            fontvol= 0,
            y = 0,
            x = 0,
            gyo = 0,
            padding = 0,
            fontRatio = 0,
            fontBase = 0,
            top = 0,
            fontSize = 0;

            var charcount = function(str){
               str = escape(str);
               for(var c = 0; c < str.length; c++, len++){
                  if(str.charAt(c) == "%"){
                     if(str.charAt(++c) == "u"){
                        c += 3;
                        len++;
                     }
                     c++;
                  }
               }
               return len;
            };

            len = charcount(lenori) / 2;

            for(var i = 0; fontvol <= len; i++){
                  y = height / i;
                  x = width / y;
                  fontvol = (x * i);
                  gyo = i;
            };

            fontRatio = x,
            fontBase = width / fontRatio,
            fontSize = fontBase > settings.maxFont ? settings.maxFont : fontBase < settings.minFont ? settings.minFont : fontBase,
            top = 0 - fontSize;

         $el.css('font-size', fontSize + 'px');
         $el.css('top', top + 'px');
         $el.css('line-height', fontSize + 'px');

         console.log('y = %f', y);
         console.log('x = %f', x);
         console.log('fontSize = %f', fontSize);
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