function initMap() {
	// Map
	var mapOptions = {
		zoom: 4,
		center: new google.maps.LatLng(43.000000,-43.00000),
		mapTypeId: google.maps.MapTypeId.ROADMAP,
		draggable: false,
		scrollwheel: false,
		disableDefaultUI: true,
		disableDoubleClickZoom: true
	}
	var map = new google.maps.Map(document.getElementById('map'), mapOptions);

	// Resize stuff...
	google.maps.event.addDomListener(window, "resize", function() {
	   var center = map.getCenter();
	   google.maps.event.trigger(map, "resize");
	   map.setCenter(center);
	});

	// Markers POI
	var madrid = new google.maps.Marker({
		position: new google.maps.LatLng(40.412154, -3.704301),
		map: map,
		title: 'Madrid',
		icon: 'http://maps.google.com/mapfiles/ms/icons/red-dot.png'
	});

	var austin = new google.maps.Marker({
		position: new google.maps.LatLng(30.268018, -97.743292),
		map: map,
		title: 'Austin',
		icon: 'http://maps.google.com/mapfiles/ms/icons/red-dot.png'
	});

	var dallas = new google.maps.Marker({
		position: new google.maps.LatLng(32.822586, -96.872927),
		map: map,
		title: 'Dallas',
		icon: 'http://maps.google.com/mapfiles/ms/icons/red-dot.png'
	});

	var valladolid = new google.maps.Marker({
		position: new google.maps.LatLng(41.668125, -4.738319),
		map: map,
		title: 'Valladolid',
		icon: 'http://maps.google.com/mapfiles/ms/icons/red-dot.png'
	});

	// Markers Vacation Spots
	var houston = new google.maps.Marker({
		position: new google.maps.LatLng(29.816764, -95.379192),
		map: map,
		title: 'Houston',
		icon: 'http://maps.google.com/mapfiles/ms/icons/blue.png'
	});

	var newOrleans = new google.maps.Marker({
		position: new google.maps.LatLng(29.951391, -90.085727),
		map: map,
		title: 'New Orleans',
		icon: 'http://maps.google.com/mapfiles/ms/icons/blue.png'
	});

	var newYork = new google.maps.Marker({
		position: new google.maps.LatLng(40.711551, -74.006163),
		map: map,
		title: 'New York',
		icon: 'http://maps.google.com/mapfiles/ms/icons/blue.png'
	});

	var boston = new google.maps.Marker({
		position: new google.maps.LatLng(42.361063, -71.061622),
		map: map,
		title: 'Boston',
		icon: 'http://maps.google.com/mapfiles/ms/icons/blue.png'
	});

}