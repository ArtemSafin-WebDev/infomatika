var styles01 = [
	{
		"stylers": [
			{
				"hue": "#78d2f4"
			},
			{
				"saturation": 85
			},
			{
				'lightness': -15
			}
		]
	}
];
var styles02 = [
	{
		"stylers": [
			{
				"hue": "#CFF5F3"
			},
			{
				"saturation": 55
			},
			{
				'lightness': -8
			}
		]
	}
];
var styles03 = [
	{
		"stylers": [
			{
				"hue": "#d5b5f5"
			},
			{
				"saturation": 55
			},
			{
				'lightness': -8
			}
		]
	}
];

initializeMap();

function getLatLngFromString(ll, cent1, cent2) {
	var latlng = ll.split(',');
	if(cent1 > 0 || cent2 > 0)
		return new google.maps.LatLng(parseFloat(latlng[0]) + cent1, parseFloat(latlng[1]) - cent2);
	else
		return new google.maps.LatLng(parseFloat(latlng[0]), parseFloat(latlng[1]));
}

function initializeMap() {

	$('.map-item').each(function(i, el) {

		var map_id = $(el).attr('id');
		var style = $(el).data('style');
		var styledMap = new google.maps.StyledMapType(window[style], {name: "Styled Map"});
		var point = getLatLngFromString($(el).data('point'));
		var cent1 = parseFloat($(el).data('cent1'));
		var cent2 = parseFloat($(el).data('cent2'));
		var center = getLatLngFromString($(el).data('center'), cent1, cent2);
		var address = $(el).data('address');
		var head = $(el).data('head');

		var myOptions = {
			zoom: $(el).data('zoom'),
			center: center,
			mapTypeId: google.maps.MapTypeId.ROADMAP,
			navigationControl: false,
			streetViewControl: false,
			mapTypeControl: false,
			scaleControl: false,
			scrollwheel: false,
			draggable: true,
			zoomControlOptions: {
				style: google.maps.ZoomControlStyle.DEFAULT,
				position: google.maps.ControlPosition.LEFT_TOP
			}
		};

		var map = new google.maps.Map(document.getElementById(map_id), myOptions);

		map.mapTypes.set('map_style', styledMap);
		map.setMapTypeId('map_style');

		var contentString = '<div class="contacts-maps__hint">'+
			'<span class="title-hint">' + head + '</span>'+
			'<p class="desc-hint">' + address + '</p>'+
			'</div>';

		var infoBubble = new InfoBubble({
			map: map,
			// minWidth: 'auto',
			minHeight: 165,
			// maxHeight: 250,
			maxHeight: 'auto',
			content: contentString,
			position: point,
			shadowStyle: 0,
			padding: 20,
			backgroundColor: '#fff',
			borderRadius: 0,
			arrowSize: 25,
			borderWidth: 0,
			disableAutoPan: false,
			hideCloseButton: true,
			arrowPosition: 100,
			backgroundClassName: 'transparent',
			arrowStyle: 1
		});
		infoBubble.open();

		setTimeout(function(){
			map.setCenter( center );
		}, 500);

	});
}