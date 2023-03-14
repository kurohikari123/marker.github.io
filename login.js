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
    var i=1
    const {data:posts,error}=await supa
    .from('users')
    .select('*')

    const {count}=await supa
    .from('users')
    .select('*',{count:'exact',head: true})
    if(!error){
        posts.forEach(function(item){
            if((item.u_id) == document.getElementById('uid').value && (item.u_pass) == document.getElementById('pass').value)
            {
                console.log(item)
                window.location.href="https://kurohikari123.github.io/marker.github.io/index.html"
            }
            else{
                i=i+1
                console.log(i)
                if(i>count)
                {
                    document.getElementById('error1').style.display="initial"
                }
                else
                {
                    document.getElementById('error1').style.display="none"
                }
            }
        })
    }
    else
    {
        console.log(error)
    }
}
async function admin_login(){
    var i=1
    const {data:posts, error}=await supa
    .from('admin')
    .select('*')

    const {count}=await supa
    .from('admin')
    .select('*',{count:'exact',head:true})
    if(!error){
        posts.forEach(function(item){
            if((item.a_id) == document.getElementById('uid').value && (item.pass) == document.getElementById('pass').value )
            {
                console.log(item)
                window.location.href="https://kurohikari123.github.io/marker.github.io/AR-ADMIN_DASHBOARD.html"
            }
            else{
               i=i+1
               if(i>count)
               {
                user_login()
               }
            }
        })
    }
    else
    {
        console.log(error)
    }
   
}




document.querySelector('.signin').addEventListener('click',admin_login)
admin_cred();
user_cred();