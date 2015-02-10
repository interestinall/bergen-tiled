$(document).ready(function() {

	 var flickerAPI = "http://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?";

	  var options = {

            tags: "bergen, norway",
            format: "json"

        };

    $('button').click(function () {

    	console.log("button wrks");

       

        function display(data) {

            var photoHTML = '<ul>';

            $.each(data.items, function (i, photo) {

                photoHTML += '<li>';
                photoHTML += '<a href=" ' + photo.link + ' ">';
                photoHTML += '<img src="' + photo.media.m + '"></a></li>';

                photoHTML += '</ul>';
                $('#photos').html(photoHTML);
            });

        }

        $.getJSON(flickerAPI, options, display);


    });

});