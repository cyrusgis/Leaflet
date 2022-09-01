//full screen function
var mapID = document.getElementById('map');
function fullScreenView() {
    if(document.fullscreenElement){
        document.exitFullscreen()
    }else {
    mapID.requestFullscreen();
    }
}
//browser print
L.control.browserPrint({ position: 'topright', title: 'Print' }).addTo(map);

//measure tool
// L.control.measure().addTo(map);

//geocoder
L.Control.geocoder().addTo(map);

//zoom to default extent
$('.zoom-to-default').click(function () {
    map.setView([43.6532, -79.3832], 13)
})
