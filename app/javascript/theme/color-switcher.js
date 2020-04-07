document.addEventListener("DOMContentLoaded", function(event) { 
  /*!
 * classie - class helper functions
 * from bonzo https://github.com/ded/bonzo
 * 
 * classie.has( elem, 'my-class' ) -> true/false
 * classie.add( elem, 'my-new-class' )
 * classie.remove( elem, 'my-unwanted-class' )
 * classie.toggle( elem, 'my-class' )
 */

/*jshint browser: true, strict: true, undef: true */
/*global define: false */

( function( window ) {

  'use strict';
  
  // class helper functions from bonzo https://github.com/ded/bonzo
  
  function classReg( className ) {
    return new RegExp("(^|\\s+)" + className + "(\\s+|$)");
  }
  
  // classList support for class management
  // altho to be fair, the api sucks because it won't accept multiple classes at once
  var hasClass, addClass, removeClass;
  
  if ( 'classList' in document.documentElement ) {
    hasClass = function( elem, c ) {
      return elem.classList.contains( c );
    };
    addClass = function( elem, c ) {
      elem.classList.add( c );
    };
    removeClass = function( elem, c ) {
      elem.classList.remove( c );
    };
  }
  else {
    hasClass = function( elem, c ) {
      return classReg( c ).test( elem.className );
    };
    addClass = function( elem, c ) {
      if ( !hasClass( elem, c ) ) {
        elem.className = elem.className + ' ' + c;
      }
    };
    removeClass = function( elem, c ) {
      elem.className = elem.className.replace( classReg( c ), ' ' );
    };
  }
  
  function toggleClass( elem, c ) {
    var fn = hasClass( elem, c ) ? removeClass : addClass;
    fn( elem, c );
  }
  
  var classie = {
    // full names
    hasClass: hasClass,
    addClass: addClass,
    removeClass: removeClass,
    toggleClass: toggleClass,
    // short names
    has: hasClass,
    add: addClass,
    remove: removeClass,
    toggle: toggleClass
  };
  
  // transport
  if ( typeof define === 'function' && define.amd ) {
    // AMD
    define( classie );
  } else {
    // browser global
    window.classie = classie;
  }
  
  })( window );
  /* Styles Switcher */
  
  window.console = window.console || (function(){
    var c = {}; c.log = c.warn = c.debug = c.info = c.error = c.time = c.dir = c.profile = c.clear = c.exception = c.trace = c.assert = function(){};
    return c;
  })();
  
  
  jQuery(document).ready(function($) {
    "use strict"
    $("ul.colors .color1" ).click(function(){
      $("#colors" ).attr("href", "css/colors/preset.css" );
      return false;
    });	
  
    $("ul.colors .color2" ).click(function(){
      $("#colors" ).attr("href", "css/colors/blue.css" );
      return false;
    });	
  
    $("ul.colors .color3" ).click(function(){
      $("#colors" ).attr("href", "css/colors/turquoise.css" );
      return false;
    });
  
    $("ul.colors .color4" ).click(function(){
      $("#colors" ).attr("href", "css/colors/orange.css" );
      return false;
    });
  
    $("ul.colors .color5" ).click(function(){
      $("#colors" ).attr("href", "css/colors/wisteria.css" );
      return false;
    });	
  
    $("ul.colors .color6" ).click(function(){
      $("#colors" ).attr("href", "css/colors/alizarin.css" );
      return false;
    });
  
    $("#color-style-switcher .bottom a.settings").click(function(e){
      e.preventDefault();
      var div = $("#color-style-switcher");
      if (div.css("left") === "-145px") {
        $("#color-style-switcher").animate({
          left: "0px"
        }); 
      } else {
        $("#color-style-switcher").animate({
          left: "-145px"
        });
      }
    })
  
    $("ul.colors li a").click(function(e){
      e.preventDefault();
      $(this).parent().parent().find("a").removeClass("active");
      $(this).addClass("active");
    })
  
  });
  
  
  
  //Inject Necessary Styles and HTML
  jQuery('head').append('<link rel="stylesheet" id="colors" href="css/colors/preset.css" type="text/css" />');
  jQuery('head').append('<link rel="stylesheet" href="css/color-switcher.css" type="text/css" />'); 
  
  jQuery('body').append('' + 
    '<div id="color-style-switcher">' +
      '<div>' + 
        '<h3>Color Palette</h3>' +
        '<ul class="colors">' +
          '<li><a class="color1 active" href="#"></a></li>' +
          '<li><a class="color2" href="#"></a></li>' +
          '<li><a class="color3" href="#"></a></li>' +
          '<li><a class="color4" href="#"></a></li>' +
          '<li><a class="color5" href="#"></a></li>' +
          '<li><a class="color6" href="#"></a></li>' +
        '</ul>' +
      '</div>' +
      '<div class="bottom"> <a href="#" class="settings"><i class="lni-cog"></i></a> </div>' +
    '</div>' +
  '');
  
});