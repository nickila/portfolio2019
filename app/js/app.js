$(document).ready(function() {
    
    $("#about").on("click", function(event) {
        event.preventDefault();
        console.log("about");
        $("#about-section").slideToggle(900);
        $("#contact").parent().slideToggle();
        $("#portfolio").parent().slideToggle();
        
        
    });
    $("#portfolio").on("click", function(event) {
        event.preventDefault();
        console.log("portfolio");
    });
    $("#contact").on("click", function(event) {
        event.preventDefault();
        console.log("contact");
    });










})