/***********************
* Adobe Edge Animate Composition Actions
*
* Edit this file with caution, being careful to preserve
* function signatures and comments starting with 'Edge' to maintain the
* ability to interact with these actions from within Adobe Edge Animate
*
***********************/
(function($, Edge, compId){
var Composition = Edge.Composition, Symbol = Edge.Symbol; // aliases for commonly used Edge classes

   //Edge symbol: 'stage'
   (function(symbolName) {


      Symbol.bindElementAction(compId, symbolName, "document", "compositionReady", function(sym, e) {
         var stageHeight = sym.$('Stage').height(); // Set a variable for the height of the stage

         sym.$("#Stage").css({ // Set the transform origin so we always scale to the top left corner of the stage
         "transform-origin":"0 0",
         "-ms-transform-origin":"0 0",
         "-webkit-transform-origin":"0 0",
         "-moz-transform-origin":"0 0",
         "-o-transform-origin":"0 0"
         });

         function scaleStage() {
             var stage = sym.$('Stage'); // Set a reusable variable to reference the stage
             var parent = sym.$('Stage').parent(); // Set a reusable variable to reference the parent container of the stage

             var parentWidth = stage.parent().width(); // Get the parent of the stage width
             var stageWidth = stage.width(); // Get the stage width
             var desiredWidth = Math.round(parentWidth * 1); // Set the new width of the stage as it scales
             var rescale = (desiredWidth / stageWidth); // Set a variable to calculate the new width of the stage as it scales

             // Save teh scale Ratio for latter use
             sym.scaleRatio = rescale;

           // Rescale the stage!
           stage.css('transform', 'scale(' + rescale + ')');
             stage.css(  '-o-transform', 'scale(' + rescale + ')');
           stage.css('-ms-transform', 'scale(' + rescale + ')');
             stage.css('-webkit-transform', 'scale(' + rescale + ')');
           stage.css('-moz-transform', 'scale(' + rescale + ')');
             stage.css('-o-transform', 'scale(' + rescale + ')');
             parent.height(stageHeight * rescale); // Reset the height of the parent container so the objects below it will reflow as the height adjusts
         }

         // Make it happen when the browser resizes
         $(window).on('resize', function(){
           scaleStage();
         });

         // Make it happen when the page first loads
         $(document).ready(function(){
             scaleStage();
         });

         var symDur = sym.getSymbol("timelinePlay").getDuration(); // Get the timeline length of timelinePlay. We'll reference this later in the code.
         var mySymbol = sym.getSymbol("timelinePlay"); // Get the symbol timelinePlay. We'll reference this later in the code.
         var scrubber = sym.$("scrubber"); // Touch this to scrub the timeline of timelinePlay
         var bar = sym.$("bar"); // Bar the scrubber follows
         sym.$("mobileHit").hide(); // Added an extra invisible div to increase the hit region for mobile (hard to grab otherwise)
         var dragme = false; // Set the initial dragme function to false

         // Detect if mobile device, and if so swap out mouse events for touch events. This is pretty much duplicated code with touch events swapped.

         if (/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent)) {

             sym.$("mobileHit").show(); // Show the extra invisible div to increase the hit region for mobile (hard to grab otherwise)

             $(function () {

                 scrubber.bind("touchstart", function (e) { // Enable the scrubber on touchstart
                     e.preventDefault(); // Cancels the default action of the mobile device - used to ensure our touch events are fired
                     dragme = true;
                 });

                 scrubber.bind("touchend", function () { // Disable the scrubber on touchend
                     e.preventDefault();
                     dragme = false;
                 });

                 scrubber.bind("touchmove", function (e) { // Make the magic happen on touchmove
                     if (dragme) {
                         var touch = e.originalEvent.touches[0];
                         var possibleX = touch.pageX;
                         var leftX = bar.offset().left;
                         var rightX = (leftX + bar.width()) - scrubber.width();
                         var scrubWidth = rightX - leftX;

                  // Confine the scrubber to the width of the bar

                         if (possibleX < leftX) {
                             possibleX = leftX;
                         }

                         if (possibleX > rightX) {
                             possibleX = rightX;
                         }

                         scrubber.offset({
                             left: possibleX
                         });

                         var relativeX = possibleX - leftX;
                         var stopTimeline = Math.ceil((relativeX / scrubWidth) * symDur); // Make the scrubber scrub the timeline length of timelinePlay

                         mySymbol.stop(stopTimeline); // Stop the timeline of timelinePlay when the scrubber is released

                     }
                 });
             })
         }

         else $(function () {

             scrubber.mousedown(function (e) { // Enable the scrubber on mousedown

                // Get the differnce between where mouse captured & left of scrubber. Ideally scrubber center should be at 0 instead of left
                sym.handleDiff = parseInt(e.pageX-scrubber.offset().left);

                // Use scaling Ratio to calculate new values
                sym.leftX = bar.offset().left;
                sym.rightX = (sym.leftX + bar.width()*sym.scaleRatio) - scrubber.width()*sym.scaleRatio;
                 sym.scrubWidth = sym.rightX - sym.leftX;
                 sym.scrubWidth = sym.scrubWidth*sym.scaleRatio;

                 dragme = true
             })
             $(document).mouseup(function () { // Disable the scrubber on mouseup
                 dragme = false
             })
             $(document).mousemove(function (e) { // Make the magic happen on mousemove

                 if (dragme) {
                     var possibleX = e.pageX - sym.handleDiff;

                     // Confine the scrubber to the width of the bar
                     if (possibleX < sym.leftX) {
                         possibleX = sym.leftX;
                     }

                     if (possibleX > sym.rightX) {
                         possibleX = sym.rightX;
                     }

                     // console.log('scrubber left',scrubber.offset().left);
                     // console.log('new left possibleX',possibleX);

                     scrubber.offset({
                         left: possibleX
                     });

                     var relativeX = possibleX - sym.leftX;
                     relativeX = relativeX;

                     // Fix the duration by the scaling ratio
                     var stopTimeline = Math.ceil((relativeX / sym.scrubWidth) * symDur*sym.scaleRatio); // Make the scrubber scrub the timeline length of timelinePlay

                     mySymbol.stop(stopTimeline); // Stop the timeline of timelinePlay when the scrubber is released

                 }
             })
         })

      });
      //Edge binding end




   })("stage");
   //Edge symbol end:'stage'

   //=========================================================

   //Edge symbol: 'engine_anim'
   (function(symbolName) {

   })("timelinePlay");
   //Edge symbol end:'timelinePlay'

   //=========================================================

   //Edge symbol: 'sym'
   (function(symbolName) {

   })("sym");
   //Edge symbol end:'sym'

   //=========================================================

   //Edge symbol: 'bookahBg_1'
   (function(symbolName) {

   })("bokehBgLg");
   //Edge symbol end:'bokehBgLg'

   //=========================================================

   //Edge symbol: 'bokehBgMeg'
   (function(symbolName) {

   })("bokehBgMed");
   //Edge symbol end:'bokehBgMed'

   //=========================================================

   //Edge symbol: 'BokehBgSm'
   (function(symbolName) {

   })("BokehBgSm");
   //Edge symbol end:'BokehBgSm'

})(jQuery, AdobeEdge, "EDGE-11346385");