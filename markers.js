function markers(){
	// Markers POI
	var madrid = new google.maps.Marker({
			position: new google.maps.LatLng(40.412154, -3.704301),
			map: map,
			title: 'Madrid'
	});

	var austin = new google.maps.Marker({
			position: new google.maps.LatLng(30.268018, -97.743292),
			map: map,
			title: 'Austin'
	});

	var dallas = new google.maps.Marker({
			position: new google.maps.LatLng(32.822586, -96.872927),
			map: map,
			title: 'Dallas'
	});

	var valladolid = new google.maps.Marker({
			position: new google.maps.LatLng(41.668125, -4.738319),
			map: map,
			title: 'Valladolid'
	});

	// Markers Vacation Spots


}

markers();