//const { createClient } =require('@supabase/supabase-js');
// Create a single supabase client for interacting with your database

var supa = supabase.createClient('https://kbvhwxtlilabjpngjbup.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imtidmh3eHRsaWxhYmpwbmdqYnVwIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzgzNjMyODcsImV4cCI6MTk5MzkzOTI4N30.9DZ2DAguUucUH8_ADBVyXEJRQ_Do1SIctNjH4hySdjw');
async function start(){
       
const { data, error } = await supa
.from('companies')
.select("*")
console.log(data)  
}
start();

/*
if (!error) 
let contents='' // const{data: posts}
posts.forEach(function(item){
    contents='<div> ${item.id} - ${item.name}-${item.address}</div>'
}) 
const parent = document.getElementById('holder')
parent.insertAdjacentHTML('beforeend',contents)*/