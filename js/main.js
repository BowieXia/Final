// Leaflet map setup
var latlng = [ -75.198051,39.955291];

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

Stamen_TonerLite = L.tileLayer('http://{s}.basemaps.cartocdn.com/light_nolabels/{z}/{x}/{y}.png', {
  attribution: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
  subdomains: 'abcd',
  minZoom: 0,
  maxZoom: 20,
  ext: 'png'
}).addTo(map_2);
//Stamen_TonerLite.addTo(map_2);
L.control.mousePosition().addTo(map_2);

Stamen_TonerLite = L.tileLayer('http://{s}.basemaps.cartocdn.com/light_nolabels/{z}/{x}/{y}.png', {
  attribution: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
  subdomains: 'abcd',
  minZoom: 0,
  maxZoom: 20,
  ext: 'png'
}).addTo(map_3);


  function ShowCover(){
    $('.cover').addClass('animated bounceInUp').one('webkitAnimationEnd', function(){ $(this).removeClass('animated bounceInUp');});
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
    $('.cover').addClass('animated hinge').one('webkitAnimationEnd', function(){ $(this).removeClass('animated hinge');});
  }

  var cartoUserName = 'boaoxxh';
  var cartoVizId_1 = '05b2c8b3-a13d-4a21-bfff-c7f12f7d65f0';
  // var cartoVizId_2 = 'd5d2d506-1587-11e7-92db-0e98b61680bf';
  //https://boaoxxh.carto.com/viz/1a92c9b0-1267-41cd-a7e9-6af9db3685bf/public_map
  var cartoVizId_3 = '1a92c9b0-1267-41cd-a7e9-6af9db3685bf';
  //https://boaoxxh.carto.com/viz/d5d2d506-1587-11e7-92db-0e98b61680bf/public_map
  //https://boaoxxh.carto.com/viz/1a92c9b0-1267-41cd-a7e9-6af9db3685bf/public_map
  //https://boaoxxh.carto.com/viz/d5d2d506-1587-11e7-92db-0e98b61680bf/public_map
  //https://boaoxxh.carto.com/viz/317d594a-10d2-11e7-941d-0ef7f98ade21/public_map
  //https://boaoxxh.carto.com/viz/68bb0e6e-a7b1-11e6-b154-0ecd1babdde5/public_map
  //https://boaoxxh.carto.com/viz/317d594a-10d2-11e7-941d-0ef7f98ade21/public_map
  //https://boaoxxh.carto.com/viz/317d594a-10d2-11e7-941d-0ef7f98ade21/public_map
  //https://boaoxxh.carto.com/api/v2/viz/1a92c9b0-1267-41cd-a7e9-6af9db3685bf/viz.json
  //https://boaoxxh.carto.com/api/v2/viz/1a92c9b0-1267-41cd-a7e9-6af9db3685bf/viz.json
  //https://boaoxxh.carto.com/api/v2/viz/05b2c8b3-a13d-4a21-bfff-c7f12f7d65f0/viz.json
  var layerUrl_1 = 'https://'+cartoUserName+'.carto.com/api/v2/viz/'+cartoVizId_1+'/viz.json';
  //var layerUrl_2 = 'https://'+cartoUserName+'.carto.com/api/v2/viz/'+cartoVizId_2+'/viz.json';
  var layerUrl_3 = 'https://'+cartoUserName+'.carto.com/api/v2/viz/'+cartoVizId_3+'/viz.json';
  // var layerUrl_1 = "https://boaoxxh.carto.com/api/v2/viz/d5d2d506-1587-11e7-92db-0e98b61680bf/viz.json";
  // var layerUrl_3 = "https://boaoxxh.carto.com/api/v2/viz/1a92c9b0-1267-41cd-a7e9-6af9db3685bf/viz.json";

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
   //parks polygon layer


   cartodb.createLayer(map_3, layerUrl_3)
     .on('done', function(layer) {
       layer.addTo(map_3);
     }).on('error', function(err) {
       console.log(err);
     });

  $(document).ready(function() {



  //  Stamen_TonerLite.addTo(map_3);

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


    // $('.Cover_Headline').addClass('animated bounceInDown').one('webkitAnimationEnd', function(){ $(this).removeClass('animated bounceInDown');});
    // $('.Description').addClass('animated bounceInDown').one('webkitAnimationEnd', function(){ $(this).removeClass('animated bounceInDown');});
    // $('.StartButton').addClass('animated bounceInUp').one('webkitAnimationEnd', function(){ $(this).removeClass('animated bounceInUp');});
    // $('.Button_Description').addClass('animated bounceInUp').one('webkitAnimationEnd', function(){ $(this).removeClass('animated bounceInUp');});
    // $('.MapDiv').addClass('animated bounceInUp').one('webkitAnimationEnd', function(){ $(this).removeClass('animated bounceInUp');});
    // $('.NavDiv').addClass('animated bounceInUp').one('webkitAnimationEnd', function(){ $(this).removeClass('animated bounceInUp');});
    // $('.AnaDiv').addClass('animated bounceInUp').one('webkitAnimationEnd', function(){ $(this).removeClass('animated bounceInUp');});
    var featureGroup;
    var ClosestGroup;

    var GreenMarker = {
      radius: 16,
      fillColor: "#1abc9c",
      color:"#e74c3c"
    };
    var BlueMarker = {
      radius: 8,
      fillColor: "#2980b9",
      color:"#c0392b"
    };

    var GeojsonParks = "https://raw.githubusercontent.com/BowieXia/Final/master/data/ppr_assets.geojson";
    $.ajax(GeojsonParks).done(function(data) {
       parsedData = JSON.parse(data);
       //console.log(parsedData.features);
       featureGroup = L.geoJson(parsedData.features, {
         style: myStyle,
         onEachFeature: onEachFeature
       }).addTo(map_2);
      //  var LayerArray = jQuery.makeArray(featureGroup._layers);
      //  console.log(LayerArray);
        //console.log(featureGroup);
        //console.log(LayerArray);
      //  ClosestGroup = L.GeometryUtil.closest(map_2, LayerArray, latlng);
      //  //console.log(ClosestGroup);
      //  L.circleMarker([latlng[1],latlng[0]]).addTo(map_2).bindPopup("Given Point").setStyle(BlueMarker);
      //  L.circleMarker([ClosestGroup.lng,ClosestGroup.lat],['color','red']).addTo(map_2).bindPopup("Closest to a given point").setStyle(GreenMarker);
      //  featureGroup.eachLayer(eachFeatureFunction);
     });
     function onEachFeature(feature, layer) {
       if (feature.properties) {
           layer.bindPopup("Label:" + feature.properties.label + "<br />" + "Use:" + feature.properties.use_);
       }
      //  var Polygon = feature.geometry.coordinates[0][0];
      //  LayerArray.push(Polygon);
       //console.log(LayerArray);
     }
     var eachFeatureFunction = function(layer) {
       layer.on('click', function (event) {
         /* =====================
         The following code will run every time a layer on the map is clicked.
         Check out layer.feature to see some useful data about the layer that
         you can use in your application.
         ===================== */
         //console.log(layer.feature.properties);

         //var LayerID = featureGroup.getLayerId();

         var LatLngBounds = layer.getBounds();
         LayerID = layer._leaflet_id;
         //console.log(LayerID);
         //console.log(LatLngBounds);
         map_2.fitBounds(LatLngBounds);
       });
     };
     var myStyle = {
         "color": "#27ae60",
         "weight": 3,
         "opacity": 0.65,
         "fillColor": "#2ecc71",
         "fillOpacity": 0.3
     };
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
      if ($('.ContainBox').css('display') !== 'none') {
        $('.ContainBox').addClass('animated bounceOutUp').one('webkitAnimationEnd', function(){ $(this).removeClass('animated bounceOutUp');});
        $(".ContainBox").css("visibility","hidden");
        $('.ClosestOnes').addClass('animated zoomOut').one('webkitAnimationEnd', function(){ $(this).removeClass('animated zoomOut');});
        $(".ClosestOnes").css("visibility","hidden");
        $('.Locate').addClass('animated zoomOut').one('webkitAnimationEnd', function(){ $(this).removeClass('animated zoomOut');});
        $(".Locate").css("visibility","hidden");
        $('.PinButton').addClass('animated zoomOut').one('webkitAnimationEnd', function(){ $(this).removeClass('animated zoomOut');});
        $(".PinButton").css("visibility","hidden");
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
      if ($('.ClosestOnes').css('display') !== 'none') {
        $('.ClosestOnes').addClass('animated zoomOut').one('webkitAnimationEnd', function(){ $(this).removeClass('animated zoomOut');});
        $(".ClosestOnes").css("visibility","hidden");
      }

      if ($('.ContainBox').css('display') !== 'none') {
        $('.ContainBox').addClass('animated bounceOutUp').one('webkitAnimationEnd', function(){ $(this).removeClass('animated bounceOutUp');});
        $(".ContainBox").css("visibility","hidden");
        $('.ClosestOnes').addClass('animated zoomOut').one('webkitAnimationEnd', function(){ $(this).removeClass('animated zoomOut');});
        $(".ClosestOnes").css("visibility","hidden");
        $('.Locate').addClass('animated zoomOut').one('webkitAnimationEnd', function(){ $(this).removeClass('animated zoomOut');});
        $(".Locate").css("visibility","hidden");
        $('.PinButton').addClass('animated zoomOut').one('webkitAnimationEnd', function(){ $(this).removeClass('animated zoomOut');});
        $(".PinButton").css("visibility","hidden");
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
      if ($('.ClosestOnes').css('display') !== 'none') {
        $('.ClosestOnes').addClass('animated zoomOut').one('webkitAnimationEnd', function(){ $(this).removeClass('animated zoomOut');});
        $(".ClosestOnes").css("visibility","hidden");
      }

      if ($('.ContainBox').css('display') !== 'none') {
        $('.ContainBox').addClass('animated bounceOutUp').one('webkitAnimationEnd', function(){ $(this).removeClass('animated bounceOutUp');});
        $(".ContainBox").css("visibility","hidden");
        $('.ClosestOnes').addClass('animated zoomOut').one('webkitAnimationEnd', function(){ $(this).removeClass('animated zoomOut');});
        $(".ClosestOnes").css("visibility","hidden");
        $('.Locate').addClass('animated zoomOut').one('webkitAnimationEnd', function(){ $(this).removeClass('animated zoomOut');});
        $(".Locate").css("visibility","hidden");
        $('.PinButton').addClass('animated zoomOut').one('webkitAnimationEnd', function(){ $(this).removeClass('animated zoomOut');});
        $(".PinButton").css("visibility","hidden");
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

      $('.ClosestOnes').addClass('animated zoomIn').one('webkitAnimationEnd', function(){ $(this).removeClass('animated zoomIn');});
      $(".ClosestOnes").css("visibility","visible");
      $('.Locate').addClass('animated zoomIn').one('webkitAnimationEnd', function(){ $(this).removeClass('animated zoomIn');});
      $(".Locate").css("visibility","visible");
      $('.PinButton').addClass('animated zoomIn').one('webkitAnimationEnd', function(){ $(this).removeClass('animated zoomIn');});
      $(".PinButton").css("visibility","visible");
      $('.ContainBox').addClass('animated bounceInDown').one('webkitAnimationEnd', function(){ $(this).removeClass('animated bounceInDown');});
      $(".ContainBox").css("visibility","visible");
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
      $('.ClosestOnes').addClass('animated zoomIn').one('webkitAnimationEnd', function(){ $(this).removeClass('animated zoomIn');});
      $(".ClosestOnes").css("visibility","visible");
      $('.Locate').addClass('animated zoomIn').one('webkitAnimationEnd', function(){ $(this).removeClass('animated zoomIn');});
      $(".Locate").css("visibility","visible");
      $('.PinButton').addClass('animated zoomIn').one('webkitAnimationEnd', function(){ $(this).removeClass('animated zoomIn');});
      $(".PinButton").css("visibility","visible");
      $('.ContainBox').addClass('animated bounceInDown').one('webkitAnimationEnd', function(){ $(this).removeClass('animated bounceInDown');});
      $(".ContainBox").css("visibility","visible");
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
      if ($('.ClosestOnes').css('display') !== 'none') {
        $('.ClosestOnes').addClass('animated zoomOut').one('webkitAnimationEnd', function(){ $(this).removeClass('animated zoomOut');});
        $(".ClosestOnes").css("visibility","hidden");
      }

      if ($('.ContainBox').css('display') !== 'none') {
        $('.ContainBox').addClass('animated bounceOutUp').one('webkitAnimationEnd', function(){ $(this).removeClass('animated bounceOutUp');});
        $(".ContainBox").css("visibility","hidden");
        $('.ClosestOnes').addClass('animated zoomOut').one('webkitAnimationEnd', function(){ $(this).removeClass('animated zoomOut');});
        $(".ClosestOnes").css("visibility","hidden");
        $('.Locate').addClass('animated zoomOut').one('webkitAnimationEnd', function(){ $(this).removeClass('animated zoomOut');});
        $(".Locate").css("visibility","hidden");
        $('.PinButton').addClass('animated zoomOut').one('webkitAnimationEnd', function(){ $(this).removeClass('animated zoomOut');});
        $(".PinButton").css("visibility","hidden");
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
      if ($('.ClosestOnes').css('display') !== 'none') {
        $('.ClosestOnes').addClass('animated zoomOut').one('webkitAnimationEnd', function(){ $(this).removeClass('animated zoomOut');});
        $(".ClosestOnes").css("visibility","hidden");
      }

      if ($('.ContainBox').css('display') !== 'none') {
        $('.ContainBox').addClass('animated bounceOutUp').one('webkitAnimationEnd', function(){ $(this).removeClass('animated bounceOutUp');});
        $(".ContainBox").css("visibility","hidden");
        $('.ClosestOnes').addClass('animated zoomOut').one('webkitAnimationEnd', function(){ $(this).removeClass('animated zoomOut');});
        $(".ClosestOnes").css("visibility","hidden");
        $('.Locate').addClass('animated zoomOut').one('webkitAnimationEnd', function(){ $(this).removeClass('animated zoomOut');});
        $(".Locate").css("visibility","hidden");
        $('.PinButton').addClass('animated zoomOut').one('webkitAnimationEnd', function(){ $(this).removeClass('animated zoomOut');});
        $(".PinButton").css("visibility","hidden");
      }

      $('#map_3').addClass('animated bounceInDown').one('webkitAnimationEnd', function(){ $(this).removeClass('animated bounceInDown');});
      $('#map_3').css("visibility","visible");
    });

    $( ".ClosestOnes" ).mouseover(function(){
      $(this).css("background-color", "#90a4ae");
      $(this).css("background-image", "url(css/search_1.png)");
    });
    $( ".ClosestOnes" ).mouseout(function(){
      $(this).css("background-color", "#1e1e1e");
      $(this).css("background-image", "url(css/search_1.png)");
    });

    $( ".Locate" ).mouseover(function(){
      $(this).css("background-color", "#90a4ae");
      $(this).css("background-image", "url(css/locate.png)");
    });
    $( ".Locate" ).mouseout(function(){
      $(this).css("background-color", "#1e1e1e");
      $(this).css("background-image", "url(css/locate.png)");
    });

    $( ".PinButton" ).mouseover(function(){
      $(this).css("background-color", "#90a4ae");
      $(this).css("background-image", "url(css/pin.png)");
    });
    $( ".PinButton" ).mouseout(function(){
      $(this).css("background-color", "#1e1e1e");
      $(this).css("background-image", "url(css/pin.png)");
    });

    $(".Locate").click(function(){
      var arrayL = [];
      var latlng_P = [-75.162649,39.952585];
      $.ajax(GeojsonParks).done(function(data) {
         parsedData = JSON.parse(data);
         //console.log(parsedData.features);
         featureGroup = L.geoJson(parsedData.features, {
           style: myStyle,
           onEachFeature: onEachFeature
         }).addTo(map_2);
        //  var LayerArray = jQuery.makeArray(featureGroup._layers);
        //  console.log(LayerArray);
          //console.log(featureGroup);
          //console.log(LayerArray);
         ClosestGroup = L.GeometryUtil.closest(map_2, arrayL, latlng_P);
         //console.log(ClosestGroup);
         L.circleMarker([latlng_P[1],latlng_P[0]]).addTo(map_2).bindPopup("Given Point").setStyle(BlueMarker);
         L.circleMarker([ClosestGroup.lng,ClosestGroup.lat],['color','red']).addTo(map_2).bindPopup("Closest to a given point").setStyle(GreenMarker);
         featureGroup.eachLayer(eachFeatureFunction);
       });
       function onEachFeature(feature, layer) {
         if (feature.properties) {
             layer.bindPopup("Label:" + feature.properties.label + "<br />" + "Use:" + feature.properties.use_);
         }
         var Polygon = feature.geometry.coordinates[0][0];
         arrayL.push(Polygon);
         //console.log(LayerArray);
       }
       var eachFeatureFunction = function(layer) {
         layer.on('click', function (event) {
           /* =====================
           The following code will run every time a layer on the map is clicked.
           Check out layer.feature to see some useful data about the layer that
           you can use in your application.
           ===================== */
           //console.log(layer.feature.properties);

           //var LayerID = featureGroup.getLayerId();

           var LatLngBounds = layer.getBounds();
           LayerID = layer._leaflet_id;
           //console.log(LayerID);
           //console.log(LatLngBounds);
           map_2.fitBounds(LatLngBounds);
         });
       };
       var myStyle = {
           "color": "#27ae60",
           "weight": 3,
           "opacity": 0.65,
           "fillColor": "#2ecc71",
           "fillOpacity": 0.3
       };

    });

    $(".PinButton").click(function(){


    });

    $(".ClosestOnes").click(function(){
      //Try reload the data again and then use the newly loaded data to do the closest analysis
      //ClosestGroup = L.GeometryUtil.closestLayerSnap(map_2, featureGroup._layers, latlng);
      var LayerArray =[];
      var latlng_1 = [ -75.198051,39.955291];
      $.ajax(GeojsonParks).done(function(data) {
         parsedData = JSON.parse(data);
         //console.log(parsedData.features);
         featureGroup = L.geoJson(parsedData.features, {
           style: myStyle,
           onEachFeature: onEachFeature
         }).addTo(map_2);
        //  var LayerArray = jQuery.makeArray(featureGroup._layers);
        //  console.log(LayerArray);
          //console.log(featureGroup);
          //console.log(LayerArray);
         ClosestGroup = L.GeometryUtil.closest(map_2, LayerArray, latlng_1);
         //console.log(ClosestGroup);
         L.circleMarker([latlng_1[1],latlng_1[0]]).addTo(map_2).bindPopup("Given Point").setStyle(BlueMarker);
         L.circleMarker([ClosestGroup.lng,ClosestGroup.lat],['color','red']).addTo(map_2).bindPopup("Closest to a given point").setStyle(GreenMarker);
         featureGroup.eachLayer(eachFeatureFunction);
       });
       function onEachFeature(feature, layer) {
         if (feature.properties) {
             layer.bindPopup("Label:" + feature.properties.label + "<br />" + "Use:" + feature.properties.use_);
         }
         var Polygon = feature.geometry.coordinates[0][0];
         LayerArray.push(Polygon);
         //console.log(LayerArray);
       }
       var eachFeatureFunction = function(layer) {
         layer.on('click', function (event) {
           /* =====================
           The following code will run every time a layer on the map is clicked.
           Check out layer.feature to see some useful data about the layer that
           you can use in your application.
           ===================== */
           //console.log(layer.feature.properties);

           //var LayerID = featureGroup.getLayerId();

           var LatLngBounds = layer.getBounds();
           LayerID = layer._leaflet_id;
           //console.log(LayerID);
           //console.log(LatLngBounds);
           map_2.fitBounds(LatLngBounds);
         });
       };
       var myStyle = {
           "color": "#27ae60",
           "weight": 3,
           "opacity": 0.65,
           "fillColor": "#2ecc71",
           "fillOpacity": 0.3
       };

    });

  });
