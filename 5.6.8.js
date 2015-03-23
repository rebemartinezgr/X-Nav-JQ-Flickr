$(document).ready(function(){

	$("#boton").click(function() {
		$("#images").empty();
		var flickerAPI = "http://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?";
		var tag = $("#formulario").val();
		$("#formulario").val(" ");
		$.getJSON( flickerAPI, {
			tags: tag,
			tagmode: "any",
			format: "json"
		})
		.done(function( data ) {
			$.each( data.items, function( i, item ) {
				$( "<img>" ).attr( "src", item.media.m ).appendTo( "#images" );
				if ( i === 6 ) {
					return false;
				}
			});
		});
	});
});

