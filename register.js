import {createClient} from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm'
var supa = createClient('https://kbvhwxtlilabjpngjbup.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imtidmh3eHRsaWxhYmpwbmdqYnVwIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzgzNjMyODcsImV4cCI6MTk5MzkzOTI4N30.9DZ2DAguUucUH8_ADBVyXEJRQ_Do1SIctNjH4hySdjw');
var date=new Date().toLocaleDateString()
var time=new Date().toLocaleTimeString()
async function users(){
    const {data,error}=await supa
    .from('users')
    .select('*')
    console.log(error)
    console.log(data)
}
async function register(){
    const {error}=await supa
    .from('users')
    .insert({u_id:document.querySelector('#u_id').value,
    u_ph:document.querySelector('#ph_no').value,
    u_address:document.querySelector('#address').value,
    u_pass:document.querySelector('#u_pass').value,
    u_mail:document.querySelector('#email').value,
    u_firstname:document.querySelector('#firstname').value,
    u_lastname:document.querySelector('#lastname').value,
    created_time:time,
    updated_time:time,
    created_date:date,
    updated_date:date})
    console.log(error)
    document.querySelector('form').reset();
}
document.querySelector('.signin').addEventListener('click',register)
users();