//DECLARANDO A VARIÁVEL
let map =L.map('mapid').setView([-23.5505, -45.6333],10);


//DECLARANDO A APLICAÇÃO DA API
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors'
}).addTo(map);


//EVENTO PARA CHAMAR A FUNÇÃO MAPA
map.on("click",mapa);


//CRIANDO A FUNÇÃO MAPA
function mapa(e){
    let lat = e.latlng.lat.toFixed(6);
    let long = e.latlng.lng.toFixed(6);
    const locationInfo = document.getElementById('localizacao');

    if(locationInfo){
        locationInfo.textContent =`Localização escolhida: Latitude ${lat}, Longitude ${long}`;
    }
    L.marker(e.latlng).addTo(map)
        .bindPopup(`Latitude: ${lat} <br> Longitude: ${long}`).openPopup();

}

map.on("click",mapa);