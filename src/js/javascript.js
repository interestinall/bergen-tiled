$(document).ready(function() {




    var flickerAPI = "http://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?";

    var options = {

        tags: "bergen, norge, sol",
        format: "json"

    };

    $('button').click(function() {

        console.log("button wrks");



        function display(data) {

            var photoHTML = ''

            $.each(data.items, function(i, photo) {
                 photoHTML += '<li class="grid-25 tablet-grid-50">';
          photoHTML += '<a href="' + photo.link + '" class="image">';
          photoHTML += '<img src="' + photo.media.m + '"></a></li>';


                $('#photos').html(photoHTML);
            });


        }
        $.getJSON(flickerAPI, options, display);



    });


});