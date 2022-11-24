const changeSelectByCust = () => {

    const createSelect = (options) => {
        const select = document.createElement('select')
        
        console.log('type',typeof(options))
        console.log(options)

        if (typeof(options) == 'array') {
            options.reverse()
        }
        select.append(...options)
        return select
    }

    const selectAll= document.querySelectorAll("select")
    console.log(selectAll)
    for (const select of selectAll) {    
        const newSelect = createSelect(Array.from(select.children)) 
        newSelect.className = select.className
        select.hidden = true;

        select.before(newSelect)
    }
}


function initMap() {
    const voodoo = { lat: 43.8428137, lng: -80.8208619 };
    const map = new google.maps.Map(document.querySelector(".map"), {
    zoom: 8,
    center: voodoo,
    disableDefaultUI: true,
    styles: [
        { elementType: "geometry", stylers: [{ color: "#ebe3cd" }] },
        { elementType: "labels.text.fill", stylers: [{ color: "#523735" }] },
        { elementType: "labels.text.stroke", stylers: [{ color: "#f5f1e6" }] },
        {
        featureType: "administrative",
        elementType: "geometry.stroke",
        stylers: [
            { color: "#c9b2a6" },
        ],
        },
        {
        featureType: "administrative.land_parcel",
        elementType: "geometry.stroke",
        stylers: [
            { color: "#dcd2be" }
        ],
        },
        {
        featureType: "administrative.land_parcel",
        elementType: "labels.text.fill",
        stylers: [
            { color: "#ae9e90"}
        ],
        },
        {
        featureType: "landscape.natural",
        elementType: "geometry",
        stylers: [
            { color: "#dfd2ae"}
        ],
        },
        {
        featureType: "poi",
        elementType: "geometry",
        stylers: [
            { color: "#dfd2ae" },
        ],
        },
        {
        featureType: "poi",
        elementType: "labels.text.fill",
        stylers: [
            { color: "#93817c" }
        ],
        },
        {
        featureType: "poi.park",
        elementType: "geometry.fill",
        stylers: [
            { color: "#a5b076" }
        ],
        },
        {
        featureType: "poi.park",
        elementType: "labels.text.fill",
        stylers: [
            { color: "#447530" }
        ],
        },
        {
        featureType: "road",
        elementType: "geometry",
        stylers: [
            { color: "#f5f1e6" },
        ],
        },
        {
        featureType: "road.arterial",
        elementType: "geometry",
        stylers: [
            { color: "#fdfcf8" },
        ],
        },
        {
        featureType: "road.highway",
        elementType: "geometry",
        stylers: [
            { color: "#f8c967" }        ],
        },
        {
        featureType: "road.highway",
        elementType: "geometry.stroke",
        stylers: [
            { color: "#e9bc62" }        ],
        },
        {
        featureType: "road.highway.controlled_access",
        elementType: "geometry",
        stylers: [
            { color: "#e98d58" }        ],
        },
        {
        featureType: "road.highway.controlled_access",
        elementType: "geometry.stroke",
        stylers: [
            { color: "#db8555" }
        ],
        },
        {
        featureType: "road.local",
        elementType: "labels.text.fill",
        stylers: [
            { color: "#806b63" }
        ],
        },
        {
        featureType: "transit.line",
        elementType: "geometry",
        stylers: [
            { color: "#dfd2ae" }
        ],
        },
        {
        featureType: "transit.line",
        elementType: "labels.text.fill",
        stylers: [
            { color: "#8f7d77" }
        ],
        },
        {
        featureType: "transit.line",
        elementType: "labels.text.stroke",
        stylers: [
            { color: "#ebe3cd" }
        ],
        },
        {
        featureType: "transit.station",
        elementType: "geometry",
        stylers: [
            { color: "#dfd2ae" }],
        },
        {
        featureType: "water",
        elementType: "geometry.fill",
        stylers: [
            { color: "#b9d3c2" }        ],
        },
        {
        featureType: "water",
        elementType: "labels.text.fill",
        stylers: [
            { color: "#92998d" }        ],
        },
    ]

    });

    const contentString =
    '<div class="marker-text"/>'+

    '<h1>Voodoo</h1>'+  
    "<div>137 Glasgow St., Unit 115</div>"+
    "<div>Kitchener, ON N2G 4X8</div>"+
    "<div>Ukraine</div>"+
    '</div>'+
    "<div> &#128222 1-800-480-9597 </div>"+
    "<div> ✉ info@voodoo.com</div>"
    
    const infowindow= new google.maps.InfoWindow({
        content:contentString,
        ariaLabel:"Voodoo",
        maxWidth:'244px',
    })

    const iconBase="./location_map_marker_icon_131522.png"

    console.log(iconBase)
    const marker = new google.maps.Marker({
    position: voodoo,
    map: map,
    title: "Voodoo",
    icon:  iconBase
    });

    marker.addListener("click", ()=>{
        infowindow.open({
            anchor:marker,
            map,
            title: "Voodoo"
        })
        
    })
}

document.addEventListener('DOMContentLoaded',()=>{
    changeSelectByCust()
    window.initMap = initMap; 
})

