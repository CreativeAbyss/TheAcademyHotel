var geo;
var lat_Haarlem = 52.3634361978;
var lon_Haarlem = 4.6443426721;

function getGeoLocation() {
    try {
        if( !! navigator.geolocation ) return navigator.geolocation;
        else return undefined;
    } catch(e) {
        return undefined;
    }
}
function show_coords(position) {
    let lat = position.coords.latitude;
    let lon = position.coords.longitude;
    console.log(lat);
    console.log(lon);
    console.log(lat_Haarlem);
    console.log(lon_Haarlem);

    if(lat == lat_Haarlem && lon == lon_Haarlem){
        alert("Welkom, u ben in ons hotel");
    } else {
       let confirmTest = window.confirm("Wat jammer. U bent niet in ons hotel. Wilt u de route weten?");
    if (confirmTest === true){    
       window.open("https://www.google.com/maps/place/Schipholpoort+100,+2034+MC+Haarlem/@52.3697112,4.6407728,17z/data=!3m1!4b1!4m5!3m4!1s0x47c5ef44cc492803:0x25db52d23b61cdba!8m2!3d52.3697079!4d4.6429615?shorturl=1", "_blank")
        }
    }
    
}

function geo_error(error) {
    switch(error.code) {
        case error.TIMEOUT:
            alert('Geolocation Timeout');
            break;
        case error.POSITION_UNAVAILABLE:
            alert('Geolocation Position unavailable');
            break;
        case error.PERMISSION_DENIED:
            alert('Geolocation Permission denied');
            break;
        default:
            alert('Geolocation returned an unknown error code: ' + error.code);
    }
}

function init() {
    if((geo = getGeoLocation())) {
        console.log(geo);
    } 
    geo.getCurrentPosition(show_coords, geo_error); 
}
window.onload = function() {
    init();
}