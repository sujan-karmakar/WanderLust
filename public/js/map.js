
maptilersdk.config.apiKey = mapToken;
const map = new maptilersdk.Map({
    container: "map", // container's id or the HTML element in which the SDK will render the map
    style: maptilersdk.MapStyle.STREETS,
    center: listing.geometry.coordinates, // starting position [lng, lat]
    zoom: 10, // starting zoom
});


const marker = new maptilersdk.Marker({
color: "red",
}).setLngLat(listing.geometry.coordinates)
.setPopup(new maptilersdk.Popup().setHTML(`<h5>${listing.title}</h5><br><h6>Exact location provided after booking</h6>`))
.addTo(map);
