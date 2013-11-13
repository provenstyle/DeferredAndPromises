define([], function() {

   var def = $.Deferred();
   var messages = ko.observableArray();
   
   var addDone = function() {
      def.done(function() {
         messages.push('Done');
      });
   };

   var addFail = function () {
      def.fail(function() {
         messages.push('Fail');

      });
   };

   var addAlways = function () {
      def.always(function () {
         messages.push('Always');
      });
   };

   var resolve = function() {
      def.resolve();
   };

   var reject = function() {
      def.reject();
   };
   
   return {
      addDone: addDone,
      addFail: addFail,
      addAlways: addAlways,
      resolve: resolve,
      reject: reject,
      messages: messages
   };
});