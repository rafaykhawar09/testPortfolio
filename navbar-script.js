
var navbar = $("#nav");
var hamburger = $(".hamburger");
var navGroup = $(".nav-group");
var navLinks = $(".nav-link");


hamburger.on("click", function(){
     
     if(!(hamburger.hasClass("change")))
          hamburger.addClass("change");
     else
          hamburger.removeClass("change");

     if(navGroup.hasClass("hidden")){
          navGroup.slideDown("slow");
          navGroup.removeClass("hidden");
     }
     else{
          navGroup.slideUp("slow");
          navGroup.addClass("hidden");
     }
})

navLinks.on("click", function(){
     
     if(hamburger.hasClass("change"))
          hamburger.removeClass("change");

     if(!(navGroup.hasClass("hidden"))){
          navGroup.slideUp("slow");
          navGroup.addClass("hidden");
     }

     console.log($(this).children());

     
     // document.querySelector("#projects").scrollIntoView({ 
     //      behavior: 'smooth'
     // });
});

$(window).scroll(function(){
     
     if($(window).width() > 1000){

          navbar.css("background-color", "rgba(0,0,0,0)")

          if($(window).scrollTop() > 100){
               navbar.css("background-color", "black");
          }
     }
     else{
          navbar.css("background-color", "black")
     }
});

