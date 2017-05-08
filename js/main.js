// Leaflet map setup
var map_1 = L.map('map_1', {
  center: [39.952585, -75.162649],
  zoom: 13
});

var map_2 = L.map('map_2', {
  center: [39.952585, -75.162649],
  zoom: 13
});

var map_3 = L.map('map_3', {
  center: [39.952585, -75.162649],
  zoom: 13
});

var Stamen_TonerLite = L.tileLayer('http://{s}.basemaps.cartocdn.com/light_nolabels/{z}/{x}/{y}.png', {
  attribution: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
  subdomains: 'abcd',
  minZoom: 0,
  maxZoom: 20,
  ext: 'png'
}).addTo(map_1);

var Stamen_TonerLite = L.tileLayer('http://{s}.basemaps.cartocdn.com/light_nolabels/{z}/{x}/{y}.png', {
  attribution: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
  subdomains: 'abcd',
  minZoom: 0,
  maxZoom: 20,
  ext: 'png'
}).addTo(map_2);

var Stamen_TonerLite = L.tileLayer('http://{s}.basemaps.cartocdn.com/light_nolabels/{z}/{x}/{y}.png', {
  attribution: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
  subdomains: 'abcd',
  minZoom: 0,
  maxZoom: 20,
  ext: 'png'
}).addTo(map_3);

// To add your Carto visualization, change cartoUserName and cartoVizId to your username and
// project ID. These values can be found in the URL of your map on Carto:
// - https://[cartoUserName].carto.com/[cartoVizId]

// Unfortunately, only some visualizations styles are available in this method:
//
// - None
// - Animated
// - Pixel
//
// This is a bummer. But don't worry, we'll learn about how to do more powerful visualizations
// with Carto next week when we learn about SQL

// To add visualizations created with the Analysis feature, you will need to export the data to a
// GeoJSON. From there, you can either import the GeoJSON to Carto or use Leaflet's L.geoJson.

var cartoUserName = 'boaoxxh';
var cartoVizId_1 = 'd5d2d506-1587-11e7-92db-0e98b61680bf';
// var cartoVizId_2 = 'd5d2d506-1587-11e7-92db-0e98b61680bf';
var cartoVizId_3 = '1a92c9b0-1267-41cd-a7e9-6af9db3685bf';
//https://boaoxxh.carto.com/viz/d5d2d506-1587-11e7-92db-0e98b61680bf/public_map
//https://boaoxxh.carto.com/viz/1a92c9b0-1267-41cd-a7e9-6af9db3685bf/public_map
//https://boaoxxh.carto.com/viz/d5d2d506-1587-11e7-92db-0e98b61680bf/public_map
//https://boaoxxh.carto.com/viz/317d594a-10d2-11e7-941d-0ef7f98ade21/public_map
//https://boaoxxh.carto.com/viz/68bb0e6e-a7b1-11e6-b154-0ecd1babdde5/public_map
//https://boaoxxh.carto.com/viz/317d594a-10d2-11e7-941d-0ef7f98ade21/public_map
//https://boaoxxh.carto.com/viz/317d594a-10d2-11e7-941d-0ef7f98ade21/public_map
var layerUrl_1 = 'https://'+cartoUserName+'.carto.com/api/v2/viz/'+cartoVizId_1+'/viz.json';
// var layerUrl_2 = 'https://'+cartoUserName+'.carto.com/api/v2/viz/'+cartoVizId_2+'/viz.json';
var layerUrl_3 = 'https://'+cartoUserName+'.carto.com/api/v2/viz/'+cartoVizId_3+'/viz.json';

cartodb.createLayer(map_1, layerUrl_1)
  .on('done', function(layer) {
    layer.addTo(map_1);
  }).on('error', function(err) {
    console.log(err);
  });

 // cartodb.createLayer(map_2, layerUrl_2)
 //    .on('done', function(layer) {
 //      layer.addTo(map_2);
 //    }).on('error', function(err) {
 //      console.log(err);
 //    });
 //////////Set up map 2 data and layers
 var GeojsonParks = "http://raw.githubusercontent.com/BowieXia/CPLN_692_Midterm/master/Zipcode.geojson";// TBD
 L.control.mousePosition().addTo(map_2);

 cartodb.createLayer(map_3, layerUrl_3)
   .on('done', function(layer) {
     layer.addTo(map_3);
   }).on('error', function(err) {
     console.log(err);
   });

  function ShowCover(){
    $('#Cover_Page').addClass('animated bounceInUp').one('webkitAnimationEnd', function(){ $(this).removeClass('animated bounceInUp');});
    $('.Cover_Headline').addClass('animated bounceInDown').one('webkitAnimationEnd', function(){ $(this).removeClass('animated bounceInDown');});
    $('.Description').addClass('animated bounceInDown').one('webkitAnimationEnd', function(){ $(this).removeClass('animated bounceInDown');});
    $('.StartButton').addClass('animated bounceInUp').one('webkitAnimationEnd', function(){ $(this).removeClass('animated bounceInUp');});
    $('.Button_Description').addClass('animated bounceInUp').one('webkitAnimationEnd', function(){ $(this).removeClass('animated bounceInUp');});
    $('.MapDiv').addClass('animated bounceInUp').one('webkitAnimationEnd', function(){ $(this).removeClass('animated bounceInUp');});
    $('.NavDiv').addClass('animated bounceInUp').one('webkitAnimationEnd', function(){ $(this).removeClass('animated bounceInUp');});
    $('.AnaDiv').addClass('animated bounceInUp').one('webkitAnimationEnd', function(){ $(this).removeClass('animated bounceInUp');});
  }

  function HideCover(){
    $('.Cover_Headline').addClass('animated hinge').one('webkitAnimationEnd', function(){ $(this).removeClass('animated hinge');});
    $('.Description').addClass('animated hinge').one('webkitAnimationEnd', function(){ $(this).removeClass('animated hinge');});
    $('.StartButton').addClass('animated hinge').one('webkitAnimationEnd', function(){ $(this).removeClass('animated hinge');});
    $('.Button_Description').addClass('animated hinge').one('webkitAnimationEnd', function(){ $(this).removeClass('animated hinge');});
    $('.MapDiv').addClass('animated hinge').one('webkitAnimationEnd', function(){ $(this).removeClass('animated hinge');});
    $('.NavDiv').addClass('animated hinge').one('webkitAnimationEnd', function(){ $(this).removeClass('animated hinge');});
    $('.AnaDiv').addClass('animated hinge').one('webkitAnimationEnd', function(){ $(this).removeClass('animated hinge');});
    $('#Cover_Page').addClass('animated hinge').one('webkitAnimationEnd', function(){ $(this).removeClass('animated hinge');});
  }


  $(document).ready(function() {
    // $('.Cover_Headline').addClass('animated bounceInDown').one('webkitAnimationEnd', function(){ $(this).removeClass('animated bounceInDown');});
    // $('.Description').addClass('animated bounceInDown').one('webkitAnimationEnd', function(){ $(this).removeClass('animated bounceInDown');});
    // $('.StartButton').addClass('animated bounceInUp').one('webkitAnimationEnd', function(){ $(this).removeClass('animated bounceInUp');});
    // $('.Button_Description').addClass('animated bounceInUp').one('webkitAnimationEnd', function(){ $(this).removeClass('animated bounceInUp');});
    // $('.MapDiv').addClass('animated bounceInUp').one('webkitAnimationEnd', function(){ $(this).removeClass('animated bounceInUp');});
    // $('.NavDiv').addClass('animated bounceInUp').one('webkitAnimationEnd', function(){ $(this).removeClass('animated bounceInUp');});
    // $('.AnaDiv').addClass('animated bounceInUp').one('webkitAnimationEnd', function(){ $(this).removeClass('animated bounceInUp');});

    // Weather Data Json pack
    // WeatherDataUrl = 'http://api.openweathermap.org/data/2.5/forecast?id=5164390&APPID={f7edb9d17abe4ba98ab0c5ac38c32fc7}';
    // $.getJSON(WeatherDataUrl, function(result){
    //  $.each(result, function(i, field){
    //      $("div").append(field + " ");
    //  });
    // });
    // console.log(WeatherDataUrl);

    ShowCover();
    $('.MapSideDiv').addClass('animated bounceInLeft').one('webkitAnimationEnd', function(){ $(this).removeClass('animated bounceInLeft');});
    $('.NavSideDiv').addClass('animated bounceInLeft').one('webkitAnimationEnd', function(){ $(this).removeClass('animated bounceInLeft');});
    $('.AnaSideDiv').addClass('animated bounceInLeft').one('webkitAnimationEnd', function(){ $(this).removeClass('animated bounceInLeft');});

    $(".StartButton").click(function(){
      HideCover();
    });

    $( ".StartButton" ).mouseover(function(){
      $(this).css("background-image", "url(css/start_2.png)");
      $("h2.Button_Description").css("color","#93da62");
    });
    $( ".StartButton" ).mouseout(function(){
      $(this).css("background-image", "url(css/start_3.png)");
      $("h2.Button_Description").css("color","white");
    });
    //Div group 1 animation
    $( ".MapDiv" ).mouseover(function(){
      $(this).css("top", "477px" );
      $(this).css("left", "397px");
    });
    $( ".MapDiv" ).mouseout(function(){
      $(this).css("top", "480px");
      $(this).css("left", "400px");
    });

    $( ".NavDiv" ).mouseover(function(){
      $(this).css("top", "477px");
      $(this).css("left", "522px");
    });
    $( ".NavDiv" ).mouseout(function(){
      $(this).css("top", "480px");
      $(this).css("left", "525px");
    });

    $( ".AnaDiv" ).mouseover(function(){
      $(this).css("top", "477px");
      $(this).css("left", "647px");
    });
    $( ".AnaDiv" ).mouseout(function(){
      $(this).css("top", "480px");
      $(this).css("left", "650px");
    });
    //Sidebar
    $( ".MapSideDiv" ).mouseover(function(){
      $(this).css("background-color", "#90a4ae");
      $(this).css("background-image", "url(css/map.png)");
    });
    $( ".MapSideDiv" ).mouseout(function(){
      $(this).css("background-color", "transparent");
      $(this).css("background-image", "url(css/wmap.png)");
    });

    $( ".NavSideDiv" ).mouseover(function(){
      $(this).css("background-color", "#90a4ae");
      $(this).css("background-image", "url(css/map.png)");
    });
    $( ".NavSideDiv" ).mouseout(function(){
      $(this).css("background-color", "transparent");
      $(this).css("background-image", "url(css/wmap.png)");
    });

    $( ".AnaSideDiv" ).mouseover(function(){
      $(this).css("background-color", "#90a4ae");
      $(this).css("background-image", "url(css/map.png)");
    });
    $( ".AnaSideDiv" ).mouseout(function(){
      $(this).css("background-color", "transparent");
      $(this).css("background-image", "url(css/wmap.png)");
    });


    //Click function for three buttons

    $("#Web_Title").click(function(){
      // $('#map_1').css("-webkit-animation-duration","1s");
      // $('#map_1').addClass('animated bounceOutUp');
      if ($('#map_1').css('display') !== 'none') {
        $('#map_1').addClass('animated bounceOutUp').one('webkitAnimationEnd', function(){ $(this).removeClass('animated bounceOutUp');});
        $('#map_1').css("visibility","hidden");
      }
      if ($('#map_3').css('display') !== 'none') {
        $('#map_3').addClass('animated bounceOutUp').one('webkitAnimationEnd', function(){ $(this).removeClass('animated bounceOutUp');});
        $('#map_3').css("visibility","hidden");
      }
      if ($('#map_2').css('display') !== 'none') {
        $('#map_2').addClass('animated bounceOutUp').one('webkitAnimationEnd', function(){ $(this).removeClass('animated bounceOutUp');});
        $('#map_2').css("visibility","hidden");
      }
      //.one('webkitAnimationEnd', function(){ $(this).removeClass('animated bounceOutUp');})
      // $('#map').css("visibility","hidden");
      // ShowCover();
      // $('#map').one('webkitAnimationEnd', function(){ $(this).removeClass('animated bounceOutUp');});
      // $('#map').css("visibility","hidden");
    });

    //Map Page
    $(".MapButton").click(function(){
      // HideCover();
      if ($('#map_3').css('display') !== 'none') {
        $('#map_3').addClass('animated bounceInDown').one('webkitAnimationEnd', function(){ $(this).removeClass('animated bounceInDown');});
        $('#map_3').css("visibility","hidden");
      }
      if ($('#map_2').css('display') !== 'none') {
        $('#map_2').addClass('animated bounceInDown').one('webkitAnimationEnd', function(){ $(this).removeClass('animated bounceInDown');});
        $('#map_2').css("visibility","hidden");
      }
      $('#map_1').addClass('animated bounceInDown').one('webkitAnimationEnd', function(){ $(this).removeClass('animated bounceInDown');});
      $('#map_1').css("visibility","visible");
    });

    $(".MapSideButton").click(function(){
      // HideCover();
      if ($('#map_3').css('display') !== 'none') {
        $('#map_3').addClass('animated bounceInDown').one('webkitAnimationEnd', function(){ $(this).removeClass('animated bounceInDown');});
        $('#map_3').css("visibility","hidden");
      }
      if ($('#map_2').css('display') !== 'none') {
        $('#map_2').addClass('animated bounceInDown').one('webkitAnimationEnd', function(){ $(this).removeClass('animated bounceInDown');});
        $('#map_2').css("visibility","hidden");
      }
      $('#map_1').addClass('animated bounceInDown').one('webkitAnimationEnd', function(){ $(this).removeClass('animated bounceInDown');});
      $('#map_1').css("visibility","visible");
    });

    //Navigation Page
    $(".NavButton").click(function(){
      if ($('#map_3').css('display') !== 'none') {
        $('#map_3').addClass('animated bounceInDown').one('webkitAnimationEnd', function(){ $(this).removeClass('animated bounceInDown');});
        $('#map_3').css("visibility","hidden");
      }
      if ($('#map_1').css('display') !== 'none') {
        $('#map_1').addClass('animated bounceInDown').one('webkitAnimationEnd', function(){ $(this).removeClass('animated bounceInDown');});
        $('#map_1').css("visibility","hidden");
      }
      $('#map_2').addClass('animated bounceInDown').one('webkitAnimationEnd', function(){ $(this).removeClass('animated bounceInDown');});
      $('#map_2').css("visibility","visible");
    });
    $(".NavSideButton").click(function(){
      if ($('#map_3').css('display') !== 'none') {
        $('#map_3').addClass('animated bounceInDown').one('webkitAnimationEnd', function(){ $(this).removeClass('animated bounceInDown');});
        $('#map_3').css("visibility","hidden");
      }
      if ($('#map_1').css('display') !== 'none') {
        $('#map_1').addClass('animated bounceInDown').one('webkitAnimationEnd', function(){ $(this).removeClass('animated bounceInDown');});
        $('#map_1').css("visibility","hidden");
      }
      $('#map_2').addClass('animated bounceInDown').one('webkitAnimationEnd', function(){ $(this).removeClass('animated bounceInDown');});
      $('#map_2').css("visibility","visible");
    });

    //Analysis Page
    $(".AnaButton").click(function(){
      if ($('#map_1').css('display') !== 'none') {
        $('#map_1').addClass('animated bounceInDown').one('webkitAnimationEnd', function(){ $(this).removeClass('animated bounceInDown');});
        $('#map_1').css("visibility","hidden");
      }
      if ($('#map_2').css('display') !== 'none') {
        $('#map_2').addClass('animated bounceInDown').one('webkitAnimationEnd', function(){ $(this).removeClass('animated bounceInDown');});
        $('#map_2').css("visibility","hidden");
      }
      $('#map_3').addClass('animated bounceInDown').one('webkitAnimationEnd', function(){ $(this).removeClass('animated bounceInDown');});
      $('#map_3').css("visibility","visible");
    });
    $(".AnaSideButton").click(function(){
      if ($('#map_1').css('display') !== 'none') {
        $('#map_1').addClass('animated bounceInDown').one('webkitAnimationEnd', function(){ $(this).removeClass('animated bounceInDown');});
        $('#map_1').css("visibility","hidden");
      }
      if ($('#map_2').css('display') !== 'none') {
        $('#map_2').addClass('animated bounceInDown').one('webkitAnimationEnd', function(){ $(this).removeClass('animated bounceInDown');});
        $('#map_2').css("visibility","hidden");
      }
      $('#map_3').addClass('animated bounceInDown').one('webkitAnimationEnd', function(){ $(this).removeClass('animated bounceInDown');});
      $('#map_3').css("visibility","visible");
    });

  });
