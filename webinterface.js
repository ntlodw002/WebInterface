 /** Javascript */
 var map, infoWindow;

 function initMap() {
     map = new google.maps.Map(document.getElementById('map'), {
         center: {
             lat: -33.957731,
             lng: 18.461170
         },
         zoom: 17
     });

     infoWindow = new google.maps.InfoWindow;

     // Try HTML5 geolocation.
     if (navigator.geolocation) {
         navigator.geolocation.getCurrentPosition(function(position) {
             var pos = {
                 lat: position.coords.latitude,
                 lng: position.coords.longitude
             };

             infoWindow.setPosition(pos);
             infoWindow.setContent('You are here');
             infoWindow.open(map);
             map.setCenter(pos);
         }, function() {
             handleLocationError(true, infoWindow, map.getCenter());
         });
     } else {
         // Browser doesn't support Geolocation
         handleLocationError(false, infoWindow, map.getCenter());
     }

     // Construct the polygons.
     var csc = new google.maps.Polygon({
         paths: [{
             lat: -33.956551,
             lng: 18.460927
         }, {
             lat: -33.956585,
             lng: 18.461268
         }, {
             lat: -33.957137,
             lng: 18.461209
         }, {
             lat: -33.957103,
             lng: 18.460860
         }],
         strokeColor: '#2eff00',
         fillColor: '#2eff00'
     });
     csc.setMap(map);

     // Construct the polygon.
     var steve = new google.maps.Polygon({
         paths: [{
             lat: -33.956667,
             lng: 18.460479
         }, {
             lat: -33.956692,
             lng: 18.460706
         }, {
             lat: -33.957075,
             lng: 18.460658
         }, {
             lat: -33.957065,
             lng: 18.460427
         }],
         strokeColor: '#2eff00',
         fillColor: '#2eff00'
     });
     steve.setMap(map);

     var math = new google.maps.Polygon({
         paths: [{
             lat: -33.956981,
             lng: 18.461489
         }, {
             lat: -33.957016,
             lng: 18.461770
         }, {
             lat: -33.957517,
             lng: 18.461685
         }, {
             lat: -33.957481,
             lng: 18.461397
         }],
         strokeColor: '#2eff00',
         fillColor: '#2eff00'
     });

     math.setMap(map);

     var ac_jordan = new google.maps.Polygon({
         paths: [{ lat: -33.958053, lng: 18.461277 },
             { lat: -33.958109, lng: 18.461556 },
             { lat: -33.958593, lng: 18.461406 },
             { lat: -33.958538, lng: 18.461135 }
         ],
         strokeColor: '#ff0000',
         fillColor: '#ff0000'
     });

     ac_jordan.setMap(map);

     var jagger_library = new google.maps.Polygon({
         paths: [{ lat: -33.957922, lng: 18.460712 },
             { lat: -33.957977, lng: 18.461027 },
             { lat: -33.958195, lng: 18.460958 },
             { lat: -33.958144, lng: 18.460641 }
         ],
         strokeColor: '#ffff00',
         fillColor: '#ffff00'
     });

     jagger_library.setMap(map);





 }

 function handleLocationError(browserHasGeolocation, infoWindow, pos) {
     infoWindow.setPosition(pos);
     infoWindow.setContent(browserHasGeolocation ?
         'Error: The Geolocation service failed.' :
         'Error: Your browser doesn\'t support geolocation.');
     infoWindow.open(map);
 }