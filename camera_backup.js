import {createClient} from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm'
var supa = createClient('https://kbvhwxtlilabjpngjbup.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imtidmh3eHRsaWxhYmpwbmdqYnVwIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzgzNjMyODcsImV4cCI6MTk5MzkzOTI4N30.9DZ2DAguUucUH8_ADBVyXEJRQ_Do1SIctNjH4hySdjw');
async function location()
{
    const {data,error}= await supa
    .from('locations')
    .select('*')
    console.log(data)
}
window.onload = () => {
    let places = staticLoadPlaces();
    renderPlaces(places);
    location()
};

function staticLoadPlaces() {
   return [
       {
           name: 'Locaion-Marker',
           location: {
               lat: 26.138521970305003,
               lng: 91.79979070874991,
           }, 
       },
       
   ];
}

function renderPlaces(places) {
   let scene = document.querySelector('a-scene');

   places.forEach((place) => {
       let latitude = place.location.lat;
       let longitude = place.location.lng;


       let model = document.createElement('a-entity');
       model.setAttribute('gps-entity-place', `latitude: ${latitude}; longitude: ${longitude};`);
       model.setAttribute('gltf-model', './assets/asset.glb');
       model.setAttribute('animation-mixer', '');
       model.setAttribute('rotation','0 0 30');
       model.setAttribute('scale', '10 10 10');
       model.setAttribute('position','0 30 0');
       
       
       model.addEventListener('loaded', () => {
           window.dispatchEvent(new CustomEvent('gps-entity-place-loaded'))
       });
       scene.appendChild(model);
   });
}





