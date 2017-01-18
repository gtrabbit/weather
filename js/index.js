$(document).ready(function() {
var lat;
var lon;
var units = "imperial";
var BGURL;

//gathers coordinates
if (navigator.geolocation) {
   navigator.geolocation.getCurrentPosition(function(position) {
       var lon = position.coords.longitude;
       var lat = position.coords.latitude;
     console.log(lat, lon);
  //uses those coords to define the API call
    var api = "https://cors-anywhere.herokuapp.com/api.openweathermap.org/data/2.5/weather?lat=" + lat + "&lon="+ lon +"&APPID=86bc96572a4667e324cea5c00e382a9e";
     
     
    $.getJSON(api, function(json){
      console.log(json) ;
      
      window.temp = Math.round(json.main.temp);
      
      temp = Math.round(temp*(9/5) - 459.67);
      
      
       var city = json.name;
       window.wthr = json.weather[0].main;
    
  //determines background image
      
    
      switch (window.wthr){
        case "Thunderstorm":
          BGURL =  "https://upload.wikimedia.org/wikipedia/commons/3/30/Joseph_Mallord_William_Turner_-_Snow_Storm_-_Steam-Boat_off_a_Harbour's_Mouth_-_WGA23178.jpg";
          break;
        case "Rain":    
          BGURL = "https://s-media-cache-ak0.pinimg.com/564x/55/1b/08/551b08485b0f00015d328c60c216343d.jpg";
          break;
        case "Drizzle":
          BGURL = "http://www.gkn.com/aboutus/ourheritage/PublishingImages/1775/hero2-3.jpg";
          break;
        case "Snow":
          BGURL = "https://upload.wikimedia.org/wikipedia/commons/2/23/Claude_Monet_-_Train_in_the_Snow.jpg";
          break;
        case "Atmosphere":
          BGURL = "https://holocaustvisualarchive.files.wordpress.com/2012/01/morning-fog-in-the-mountains.jpg";
          break;
        case "Clear":
          BGURL = "http://4.bp.blogspot.com/-YdDnVuJ7Ga0/UcuWVGKidII/AAAAAAAAFQA/Kqu1N2G1n9k/s400/Thomas+Cole+View+Near+the+Village+of+Catskill.jpg";
          break;
        case "Clouds":
          BGURL = "http://faculty.washington.edu/robwood2/wordpress/wp-content/uploads/2014/05/John-Constable-424532.jpg";
          break;
        case "Extreme":
          BGURL = "https://s-media-cache-ak0.pinimg.com/originals/ee/4c/e9/ee4ce94215c06e126cc6ce3bb69cb13b.jpg";
          break;
        default:
          BGURL = "http://explorethomascole.org/images/background.jpg";
          
      }
     $(".circle").css("background-image", "url(" +BGURL);
  //places weather data into the html
        $(".cityHere").html(city);
        $(".tempHere").html("&nbsp" + temp + "° F");
        $(".wthrHere").html(window.wthr);
  //converting temperature to different metrics 
      $(".convert").on("click", function(){
   
  if (units == "imperial") {
      $(".convert").html("°C")
      units = "metric";
      var temp = Math.round((window.temp - 32) * (5/9))+ "° C";
      $(".tempHere").html("&nbsp" + temp);
     } 
 else if (units == "metric"){
      $(".convert").html("°K")
      units = "";
      var temp = Math.round((window.temp + 459.67) * (5/9)) + "° K";
      $(".tempHere").html("&nbsp" + temp);
     } 
 else if (units == "") {
     $(".convert").html("°F");
     units = "imperial";
     $(".tempHere").html("&nbsp" + window.temp+ "° F");
    
    }
 
}); 
    
    
    }); 
   }); 
}
        
   
   
        
   
         
    
  
});