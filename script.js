window.onload = () => {
    let places = staticLoadPlaces();
    renderPlaces(places);
};

function staticLoadPlaces() {
   return [
       {
           name: 'Locaion-Marker',
           location: {
               lat: 26.138521970305003,
               lng: 91.79979070874991,
           },
           location2:{
             lat: 26.090076,
             lng: 91.889003,
           }
       },
       
   ];
}

function renderPlaces(places) {
   let scene = document.querySelector('a-scene');

   places.forEach((place) => {
       let latitude = place.location.lat;
       let longitude = place.location.lng;

       let latitude2 = place.location2.lat;
       let longitude2 = place.location2.lng;

       let model = document.createElement('a-entity');
       model.setAttribute('gps-entity-place', `latitude: ${latitude}; longitude: ${longitude};`);
       model.setAttribute('gltf-model', './assets/asset.glb');
       model.setAttribute('animation-mixer', '');
       model.setAttribute('rotation','0 0 30');
       model.setAttribute('scale', '10 10 10');
       model.setAttribute('position','0 30 0');
       
       let model2 = document.createElement('a-entity');
       model.setAttribute('gps-entity-place', `latitude: ${latitude2}; longitude: ${longitude2};`);
       model.setAttribute('gltf-model', './assets/asset.glb');
       model.setAttribute('animation-mixer', '');
       model.setAttribute('rotation','0 0 30');
       model.setAttribute('scale', '50 50 50');
       model.setAttribute('position','0 30 0');

       model2.addEventListener('loaded', () => {
           window.dispatchEvent(new CustomEvent('gps-entity-place-loaded'))
       });
       
       model.addEventListener('loaded', () => {
           window.dispatchEvent(new CustomEvent('gps-entity-place-loaded'))
       });
       scene.appendChild(model);
       scene.appendChild(model2);
   });
}




