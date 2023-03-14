import {createClient} from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm'
var supa = createClient('https://kbvhwxtlilabjpngjbup.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imtidmh3eHRsaWxhYmpwbmdqYnVwIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzgzNjMyODcsImV4cCI6MTk5MzkzOTI4N30.9DZ2DAguUucUH8_ADBVyXEJRQ_Do1SIctNjH4hySdjw');
async function location()
{
    let scene = document.querySelector('body');
    const {data:posts,error}= await supa
    .from('locations')
    .select('*')
    posts.forEach(function(item){
        console.log(item)
        let model = document.createElement('p');
        model.innerHTML="Patrick"
        scene.appendChild(model);
    })
    console.log(error)
}
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





