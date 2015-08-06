$(function  () {
	$('.mobil-menu-btn').click(function(){
		$('.mobile-menu').slideToggle();
	});
});


// map

 $('#map_addresses').gMap({
	address: "Al Bahr Al Aazam, Egypt",
	zoom: 10,
	icon: {
	image: "images/map-maker.png",
		iconsize: [28, 42],
		iconanchor: [100,100]
	},
	markers:[
		{
			address: "30.015651, 31.216262",
			html: "<strong><center>Web Hostings</center></strong> - Cairo, Egypt<br />- Email : info@hosting.com <br />- Phone: 01061738018",
			popup: true
		}
	]
});