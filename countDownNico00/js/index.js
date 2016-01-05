// Due to weird things with code pen the following $(document).ready(function(){}); code is in here instead being applied in the html. 
// Note: This code should be insterted into the bottom of the html document, you can see where it should be written in the html by looking at the commented out code. 
$(document).ready(function(){
 $("#count-down")
  .countdown({
   // wordFormat: "full", // uncomment this for full words
   numberFormat: "true"
  },function(){
   // Replace this alert function with your callback function. AKA what you want to happen after the time is up.  
  });
}); 
  




// Below is the code for the countdown plugin. This code should be saved in a seperate document and linked to the page that it is being used on.

/* Author : Tyler Benton
   Date : 05/04/12
   jQuery : 1.7.2, works with 2.0.3
   Purpose : light weight countdown timer 
*/
;(function($){
 $.fn.countdown = function(options, callback){
  $obj = $(this);
  var settings ={
   "numberFormat": null
  }, 
  interval = "";
  if(options){
   $.extend(settings, options);
  }
  function init(){
    var newObj = "<ul><li><div class=\"days\"></div></li><li><div class=\"hours\"></div></li><li><div class=\"minutes\"></div></li><li><div class=\"seconds\"></div></li></ul>"
   $obj
    .append(newObj);
   countdown_process();
  }
  function countdown_process(){
   var eventDate = new Date($("#count-down").attr("datetime")),
       eventDate = Date.parse(eventDate) / 1000,
       currentDate = Math.floor($.now() / 1000),
       seconds = eventDate - currentDate,
       totalSeconds = seconds,
       $days = $obj.find(".days"),
       $hours = $obj.find(".hours"),
       $minutes = $obj.find(".minutes"),
       $seconds = $obj.find(".seconds");
   days = Math.floor(seconds / (24 * 60 * 60));
   seconds -= days * 24 * 60 * 60;
   hours = Math.floor(seconds / (60 * 60));
   seconds -= hours * 60 * 60;
   minutes = Math.floor(seconds / (60));
   seconds -= minutes * 60;
   if(eventDate <= currentDate){
    callback.call(this);
    clearInterval(interval);
    days = 0;
    seconds = 0;
    hours = 0; 
    minutes = 0
    seconds = 0;
   }    
   if(settings["wordFormat"] == "full"){
    days == 1 ? $days.attr("data-interval-text", "day"):$days.attr("data-interval-text", "días");
    hours == 1 ? $hours.attr("data-interval-text", "hour"):$hours.attr("data-interval-text", "horas");
    minutes == 1 ? $minutes.attr("data-interval-text", "minute"):$minutes.attr("data-interval-text", "minutos");
    seconds == 1 ? $seconds.attr("data-interval-text", "second"):$seconds.attr("data-interval-text", "segundos"); 
   }else{
    days == 1 ? $days.attr("data-interval-text", "day"):$days.attr("data-interval-text", "días");
    hours == 1 ? $hours.attr("data-interval-text", "hr"):$hours.attr("data-interval-text", "horas");
    minutes == 1 ? $minutes.attr("data-interval-text", "min"):$minutes.attr("data-interval-text", "minutos");
    seconds == 1 ? $seconds.attr("data-interval-text", "sec"):$seconds.attr("data-interval-text", "segundos"); 
   }
   if(settings["numberFormat"] == "true"){
    days = (String(days).length >= 2) ? days : "0" + days;
    hours = (String(hours).length >= 2) ? hours : "0" + hours;
    minutes = (String(minutes).length >= 2) ? minutes : "0" + minutes;
    seconds = (String(seconds).length >= 2) ? seconds : "0" + seconds;
   }
   if(!isNaN(eventDate)){
    $days.text(days);
    $hours.text(hours);
    $minutes.text(minutes);
    $seconds.text(seconds);
   }else{
    console.log("Invalid date. Here's an example: 16 may 2012 11:59:59");
    clearInterval(interval);
   }
  }
  init();
  interval = setInterval(countdown_process, 1000);
 }
})(jQuery); //end plugin

// $("#your-selector")
//  .countdown({
//   date: "6 january 2014 00:00:00",
//   format: "on",
//  },function(){
//   Your call back function
//  });