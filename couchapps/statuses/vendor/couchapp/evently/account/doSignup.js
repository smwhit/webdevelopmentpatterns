/***
 * Excerpted from "Web Development Recipes",
 * published by The Pragmatic Bookshelf.
 * Copyrights apply to this code. It may not be used to create training material, 
 * courses, books, articles, and the like. Contact us if you are in doubt.
 * We make no guarantees that this code is fit for any purpose. 
 * Visit http://www.pragmaticprogrammer.com/titles/wbdev for more book information.
***/
function(e, name, pass) {
  var elem = $(this);
  $.couch.signup({
    name : name
  }, pass, {
    success : function() {
      elem.trigger("doLogin", [name, pass]);
    }
  });
}