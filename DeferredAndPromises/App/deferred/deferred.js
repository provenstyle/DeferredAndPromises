define([], function () {

   var message = ko.observable();

   var def = $.Deferred();
   def.done(function(data) {
      message(data);
   });
   setTimeout(function() {
      def.resolve("Hello from the deferred message!");
   }, 3000);

   var activate = function() {
      return def.promise();
   };

   return {
      message: message,
      activate: activate
   };
});