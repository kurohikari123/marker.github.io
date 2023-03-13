import {createClient} from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm'
var supa = createClient('https://kbvhwxtlilabjpngjbup.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imtidmh3eHRsaWxhYmpwbmdqYnVwIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzgzNjMyODcsImV4cCI6MTk5MzkzOTI4N30.9DZ2DAguUucUH8_ADBVyXEJRQ_Do1SIctNjH4hySdjw');
firstname=document.getElementById('firstname').value;
lastname=document.getElementById('lastname').value;
address=document.getElementById('address').value;
ph_no=document.getElementById('ph_no').value;
email=document.getElementById('email').value;
u_id=document.getElementById('u_id').value;
u_pass=document.getElementById('u_pass').value;
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
    .insert({u_id:u_id,created_at:now(),updated_at:now(),u_ph:ph_no,u_address:address,u_pass:u_pass,u_mail:email,u_firstname:firstname,u_lastname:lastname})
    console.log(error)
}
document.querySelector('.signin').addEventListener('click',register)
users();