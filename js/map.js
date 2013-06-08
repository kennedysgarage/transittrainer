var map;
var nyc = new google.maps.LatLng(40.714623,-74.006605);


var MY_MAPTYPE_ID = 'TTMap';

function initialize() {

  var stylez = [
    {
      featureType: "road",
      stylers: [
        {visibility: "off"}
      ]
    },
    {
      featureType: "transit",
      stylers: [
        {visibility: "off"}
      ]
    },
    {
      featureType: "poi",
      stylers: [
        {visibility: "off"}
      ]
    },
	{
      featureType: "administrative",
      stylers: [
        {visibility: "off"}
      ]
    },
	{
      featureType: "landscape",
      stylers: [
        {visibility: "off"}
      ]
    },
	{
      featureType: "water",
      elementType: "geometry",
      stylers: [
        { hue: "#2bbbff" },
        { saturation: 83 }
      ]
    },
	{
      featureType: "water",
      elementType: "labels",
      stylers: [
        { visibility: "off" }
      ]
    }
  ];

  var mapOptions = {
    zoom: 12,
    center: nyc,
    mapTypeControlOptions: {
       mapTypeIds: [google.maps.MapTypeId.ROADMAP, MY_MAPTYPE_ID]
    },
    mapTypeId: MY_MAPTYPE_ID
  };






  map = new google.maps.Map(document.getElementById("map_canvas"),
      mapOptions);


 var marker = new google.maps.Marker({
          map: map,
          position: new google.maps.LatLng(40.714623,-74.006605),
          draggable: true,
          title: 'Drag me!'
        });

        // Add a Circle overlay to the map.
        var circle = new google.maps.Circle({
          map: map,
          radius: 30 // 3000 km
        });

        // Since Circle and Marker both extend MVCObject, you can bind them
        // together using MVCObject's bindTo() method.  Here, we're binding
        // the Circle's center to the Marker's position.
        // http://code.google.com/apis/maps/documentation/v3/reference.html#MVCObject
        circle.bindTo('center', marker, 'position');


  var styledMapOptions = {
    name: "TransitTrainer"
  };

  var TTMapType = new google.maps.StyledMapType(stylez, styledMapOptions);

  map.mapTypes.set(MY_MAPTYPE_ID, TTMapType);
}







  function initialize() {
    var myLatLng = new google.maps.LatLng(40.763, -73.983);
    var myOptions = {
      zoom: 11,
      center: myLatLng,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };
 
    var map = new google.maps.Map(document.getElementById("map_canvas"), myOptions);
 	var subwayPath;
	var flightPath;

	for (var key in shapes) {
	
		console.log(shapes);
		
		subwayPath=[];
		
		for(var i in shapes[key] ){
		
			subwayPath.push( new google.maps.LatLng( parseFloat(shapes[key][i].lat),  parseFloat(shapes[key][i].lon)) );
			//console.log(shapes[key][i].lat);
		}

    		flightPath = new google.maps.Polyline({
      			path: subwayPath,
      			strokeColor: colors[key],
      			strokeOpacity: 1.0,
      			strokeWeight: 2
    		});
 
   			flightPath.setMap(map);
	}
		
  }