//const { createClient } =require('@supabase/supabase-js');
import {createClient} from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm'
//const {createClient}=require('https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm')
var supa = createClient('https://kbvhwxtlilabjpngjbup.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imtidmh3eHRsaWxhYmpwbmdqYnVwIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzgzNjMyODcsImV4cCI6MTk5MzkzOTI4N30.9DZ2DAguUucUH8_ADBVyXEJRQ_Do1SIctNjH4hySdjw');
async function admin_cred(){
    const { data, error } = await supa
    .from('admin')
    .select('a_id,pass')
    console.log(error)
     console.log(data)
}
async function user_cred(){
    const { data, error } = await supa
    .from('users')
    .select('u_id,u_pass')
    console.log(error)
     console.log(data)
}
async function user_login(){
    const {data:posts,error}=await supa
    .from('users')
    .select('*',{count:'exact'})
    if(!error){
        posts.forEach(function(item){
            if((item.u_id) == document.getElementById('uid').value && (item.u_pass) == document.getElementById('pass').value)
            {
                console.log(item)
                console.log(data)
                //window.location.href="https://kurohikari123.github.io/marker.github.io/index.html"
            }
            else{
                return true
            }
        })
    }
    else
    {
        alert('Wrong Credentials')
    }
}
async function admin_login(){
    const {data:posts, error}=await supa
    .from('admin')
    .select('*')
    if(!error){
        posts.forEach(function(item){
            if((item.a_id) == document.getElementById('uid').value && (item.pass) == document.getElementById('pass').value )
            {
                console.log(item)
                window.location.href="https://kurohikari123.github.io/marker.github.io/index.html"
            }
        })
    }
    else
    {
        console.log(error)
    }
   
}




document.querySelector('.signin').addEventListener('click',user_login)
admin_cred();
user_cred();