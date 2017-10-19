//Contact Map

if ($("#googleMap").length > 0)
{
    // These are ubication 
    var lat=-16.390926;
    var long=-71.543473;
    
    var myCenter = new google.maps.LatLng(
        lat, long 
    );
    function changeMarker(newLogo) {
        "use strict";
        var marker = new google.maps.Marker({
            position: myCenter,
            icon: newLogo
        });
        var map = new google.maps.Map(document.getElementById("googleMap"), {
            center: myCenter,
            zoom: 17,
            mapTypeId: google.maps.MapTypeId.ROADMAP,
            scrollwheel: false,
            mapTypeControl: false,
            scaleControl: false,
            streetViewControl: false,
            rotateControl: false,
            fullscreenControl: false,
            styles: [{
                    "featureType": "all",
                    "stylers": [
                        {"saturation": -100}
                    ]
                }]
        });
        marker.setMap(map);
    }

    google.maps.event.addDomListener(window, "load", function () {
        changeMarker("img/contact/location-color-4.png");
    });
}
