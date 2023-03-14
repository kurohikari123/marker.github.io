import {createClient} from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm'
var supa = createClient('https://kbvhwxtlilabjpngjbup.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imtidmh3eHRsaWxhYmpwbmdqYnVwIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzgzNjMyODcsImV4cCI6MTk5MzkzOTI4N30.9DZ2DAguUucUH8_ADBVyXEJRQ_Do1SIctNjH4hySdjw');
async function location()
{
    let scene = document.querySelector('a-scene');
    const {data:posts,error}= await supa
    .from('locations')
    .select('*')
    posts.forEach(function(item){
        console.log(item)
        let model = document.createElement('a-entity');
        model.setAttribute('gps-entity-place', `latitude: ${item.lat}; longitude: ${item.lng};`);
        model.setAttribute('gltf-model', './assets/asset.glb');
        model.setAttribute('animation-mixer', '');
        model.setAttribute('rotation','0 0 0');
        model.setAttribute('scale', '10 10 10');
        model.setAttribute('position','0 30 0');
        scene.appendChild(model);
    })
    console.log(error)
}
/* The above function works but we have to figure out the height relative to the ground as this will
be used mostly when the person is outdoors */

//Function to see if data is being retrieved properly
async function loadData()
{
    const {data,error}= await supa
    .from('locations')
    .select('*')
    console.log(data)
}
window.onload = () => {
     loadData()
     location()
};





