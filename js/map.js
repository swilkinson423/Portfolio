function initMap() {

	var mapZoom;
	var mapLon;
	var mapLat;

	if (window.innerHeight < 800){
		mapZoom = 2;
		mapLat = 35.000000;
		mapLon = -40.000000;
	} else {
		mapZoom = 3;
		mapLat = 10.000000;
		mapLon = -35.00000;
	}

	// Map
	var mapOptions = {
		zoom: mapZoom,
		minZoom: mapZoom,
		maxZoom: mapZoom + 3,
		center: new google.maps.LatLng(mapLat,mapLon),
		mapTypeId: google.maps.MapTypeId.ROADMAP,
		disableDefaultUI: false
	}
	var map = new google.maps.Map(document.getElementById('map'), mapOptions);

	// Resize stuff...
	google.maps.event.addDomListener(window, "resize", function() {
	   var center = map.getCenter();
	   google.maps.event.trigger(map, "resize");
	   map.setCenter(center);
	});

	// Markers
	// Primary
	var madrid = new google.maps.Marker({
		position: new google.maps.LatLng(40.412154, -3.704301),
		map: map,
		title: 'Madrid',
		icon: 'http://maps.google.com/mapfiles/ms/icons/red.png'
	});

	var austin = new google.maps.Marker({
		position: new google.maps.LatLng(30.268018, -97.743292),
		map: map,
		title: 'Austin',
		icon: 'http://maps.google.com/mapfiles/ms/icons/red.png'
	});

	var dallas = new google.maps.Marker({
		position: new google.maps.LatLng(32.822586, -96.872927),
		map: map,
		title: 'Dallas',
		icon: 'http://maps.google.com/mapfiles/ms/icons/red.png'
	});

	var valladolid = new google.maps.Marker({
		position: new google.maps.LatLng(41.668125, -4.738319),
		map: map,
		title: 'Valladolid',
		icon: 'http://maps.google.com/mapfiles/ms/icons/red.png'
	});

	// Secondary
	var valencia = new google.maps.Marker({
		position: new google.maps.LatLng(39.469907,-0.376288),
		map: map,
		title: 'valencia',
		icon: 'http://maps.google.com/mapfiles/ms/icons/blue.png'
	});

	var malaga = new google.maps.Marker({
		position: new google.maps.LatLng(36.721261,-4.421266),
		map: map,
		title: 'malaga',
		icon: 'http://maps.google.com/mapfiles/ms/icons/blue.png'
	});

	var santona = new google.maps.Marker({
		position: new google.maps.LatLng(43.444896,-3.456146),
		map: map,
		title: 'santona',
		icon: 'http://maps.google.com/mapfiles/ms/icons/blue.png'
	});

	var granada = new google.maps.Marker({
		position: new google.maps.LatLng(37.177336,-3.598557),
		map: map,
		title: 'granada',
		icon: 'http://maps.google.com/mapfiles/ms/icons/blue.png'
	});

	var panamacitybeach = new google.maps.Marker({
		position:new google.maps.LatLng(0.176591,-5.805488),
		map: map,
		title: 'panamacitybeach',
		icon: 'http://map.google.com/mapfles/ms/icons/blue.png'
	});

	var lincoln = new google.maps.Marker({
		position: new google.maps.LatLng(40.727860,-96.306496),
		map: map,
		title: 'lincoln',
		icon: 'http://maps.google.com/mapfiles/ms/icons/blue.png'
	});

	var santafe = new google.maps.Marker({
		position: new google.maps.LatLng(35.686975,-105.937799),
		map: map,
		title: 'santa fe',
		icon: 'http://maps.google.com/mapfiles/ms/icons/blue.png'
	});

	var flagstaff = new google.maps.Marker({
		position: new google.maps.LatLng(35.198284,-111.651302),
		map: map,
		title: 'flagstaff',
		icon: 'http://maps.google.com/mapfiles/ms/icons/blue.png'
	});

	var sanjose = new google.maps.Marker({
		position: new google.maps.LatLng(37.338208,-121.886329),
		map: map,
		title: 'san jose',
		icon: 'http://maps.google.com/mapfiles/ms/icons/blue.png'
	});

	var milan = new google.maps.Marker({
		position: new google.maps.LatLng(45.465422,9.185924),
		map: map,
		title: 'milan',
		icon: 'http://maps.google.com/mapfiles/ms/icons/blue.png'
	});

	var venice = new google.maps.Marker({
		position: new google.maps.LatLng(45.440847,12.315515),
		map: map,
		title: 'venice',
		icon: 'http://maps.google.com/mapfiles/ms/icons/blue.png'
	});

	var nashville = new google.maps.Marker({
		position: new google.maps.LatLng(36.162664,-86.781602),
		map: map,
		title: 'nashville',
		icon: 'http://maps.google.com/mapfiles/ms/icons/blue.png'
	});

	var paros = new google.maps.Marker({
		position: new google.maps.LatLng(37.085643,25.148832),
		map: map,
		title: 'paros',
		icon: 'http://maps.google.com/mapfiles/ms/icons/blue.png'
	});

	var canterbury = new google.maps.Marker({
		position: new google.maps.LatLng(51.280233,1.078909),
		map: map,
		title: 'canterbury',
		icon: 'http://maps.google.com/mapfiles/ms/icons/blue.png'
	});

	var montpillier = new google.maps.Marker({
		position: new google.maps.LatLng(43.610769,3.876716),
		map: map,
		title: 'montpillier',
		icon: 'http://maps.google.com/mapfiles/ms/icons/blue.png'
	});

	var nice = new google.maps.Marker({
		position: new google.maps.LatLng(43.710173,7.261953),
		map: map,
		title: 'nice',
		icon: 'http://maps.google.com/mapfiles/ms/icons/blue.png'
	});

	var houston = new google.maps.Marker({
		position: new google.maps.LatLng(29.816764, -95.379192),
		map: map,
		title: 'Houston',
		icon: 'http://maps.google.com/mapfiles/ms/icons/blue.png'
	});

	var barcelona = new google.maps.Marker({
		position: new google.maps.LatLng(41.385126,2.167135),
		map: map,
		title: 'barcelona',
		icon: 'http://maps.google.com/mapfiles/ms/icons/blue.png'
	});

	var boston = new google.maps.Marker({
		position: new google.maps.LatLng(42.361063, -71.061622),
		map: map,
		title: 'Boston',
		icon: 'http://maps.google.com/mapfiles/ms/icons/blue.png'
	});

	var denver = new google.maps.Marker({
		position: new google.maps.LatLng(39.739236,-104.990251),
		map: map,
		title: 'denver',
		icon: 'http://maps.google.com/mapfiles/ms/icons/blue.png'
	});

	var chicago = new google.maps.Marker({
		position: new google.maps.LatLng(41.878114,-87.629798),
		map: map,
		title: 'chicago',
		icon: 'http://maps.google.com/mapfiles/ms/icons/blue.png'
	});

	var porto = new google.maps.Marker({
		position: new google.maps.LatLng(41.157633,-8.627003),
		map: map,
		title: 'porto',
		icon: 'http://maps.google.com/mapfiles/ms/icons/blue.png'
	});

	var lasvegas = new google.maps.Marker({
		position: new google.maps.LatLng(36.114707,-115.172850),
		map: map,
		title: 'las vegas',
		icon: 'http://maps.google.com/mapfiles/ms/icons/blue.png'
	});

	var sanfransisco = new google.maps.Marker({
		position: new google.maps.LatLng(37.774929,-122.419416),
		map: map,
		title: 'san fransisco',
		icon: 'http://maps.google.com/mapfiles/ms/icons/blue.png'
	});

	var brussels = new google.maps.Marker({
		position: new google.maps.LatLng(50.850340,4.351710),
		map: map,
		title: 'brussels',
		icon: 'http://maps.google.com/mapfiles/ms/icons/blue.png'
	});

	var amsterdam = new google.maps.Marker({
		position: new google.maps.LatLng(52.370216,4.895168),
		map: map,
		title: 'amsterdam',
		icon: 'http://maps.google.com/mapfiles/ms/icons/blue.png'
	});

	var munich = new google.maps.Marker({
		position: new google.maps.LatLng(48.135125,11.581981),
		map: map,
		title: 'munich',
		icon: 'http://maps.google.com/mapfiles/ms/icons/blue.png'
	});

	var prague = new google.maps.Marker({
		position: new google.maps.LatLng(50.075538,14.437800),
		map: map,
		title: 'prague',
		icon: 'http://maps.google.com/mapfiles/ms/icons/blue.png'
	});

	var vienna = new google.maps.Marker({
		position: new google.maps.LatLng(48.208174,16.373819),
		map: map,
		title: 'vienna',
		icon: 'http://maps.google.com/mapfiles/ms/icons/blue.png'
	});

	var budapest = new google.maps.Marker({
		position: new google.maps.LatLng(47.497912,19.040235),
		map: map,
		title: 'budapest',
		icon: 'http://maps.google.com/mapfiles/ms/icons/blue.png'
	});

	var athens = new google.maps.Marker({
		position: new google.maps.LatLng(33.951935,-83.357567),
		map: map,
		title: 'athens',
		icon: 'http://maps.google.com/mapfiles/ms/icons/blue.png'
	});

	var neworleans = new google.maps.Marker({
		position: new google.maps.LatLng(29.951391, -90.085727),
		map: map,
		title: 'NewOrleans',
		icon: 'http://maps.google.com/mapfiles/ms/icons/blue.png'
	});

	var newyork = new google.maps.Marker({
		position: new google.maps.LatLng(40.711551, -74.006163),
		map: map,
		title: 'New York',
		icon: 'http://maps.google.com/mapfiles/ms/icons/blue.png'
	});

	var paris = new google.maps.Marker({
		position: new google.maps.LatLng(48.856614,2.352222),
		map: map,
		title: 'paris',
		icon: 'http://maps.google.com/mapfiles/ms/icons/blue.png'
	});

	var london = new google.maps.Marker({
		position: new google.maps.LatLng(51.507351,-0.127758),
		map: map,
		title: 'london',
		icon: 'http://maps.google.com/mapfiles/ms/icons/blue.png'
	});

	var rome = new google.maps.Marker({
		position: new google.maps.LatLng(41.902783,12.496366),
		map: map,
		title: 'rome',
		icon: 'http://maps.google.com/mapfiles/ms/icons/blue.png'
	});

	var marrakesh = new google.maps.Marker({
		position: new google.maps.LatLng(31.629472,-7.981084),
		map: map,
		title: 'marrakesh',
		icon: 'http://maps.google.com/mapfiles/ms/icons/blue.png'
	});

	var washington = new google.maps.Marker({
		position: new google.maps.LatLng(38.907192,-77.036871),
		map: map,
		title: 'washington',
		icon: 'http://maps.google.com/mapfiles/ms/icons/blue.png'
	});


	// Map Marker Clusters
	var markers = [madrid,newyork,neworleans,austin,dallas,valladolid,porto,barcelona,valencia,malaga,santona,granada,paris,montpillier,nice,london,canterbury,rome,milan,venice,brussels,amsterdam,munich,prague,vienna,budapest,athens,paros,marrakesh,washington,nashville,panamacitybeach,lincoln,chicago,santafe,flagstaff,lasvegas,sanfransisco,sanjose,denver];
	// var markerCluster = new MarkerClusterer(map, markers,{imagePath: 'img/m'});
}