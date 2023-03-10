var supa = supabase.createClient('https://kbvhwxtlilabjpngjbup.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imtidmh3eHRsaWxhYmpwbmdqYnVwIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzgzNjMyODcsImV4cCI6MTk5MzkzOTI4N30.9DZ2DAguUucUH8_ADBVyXEJRQ_Do1SIctNjH4hySdjw');
async function start(){
    const { data, error } = await supa
    .from('admin')
    .select('a_id,pass')
    console.log(data)  
}
async function admin_login(){
    const {data:posts, error}=await supa
    .from('admin')
    .select('*')
    if(!error){
        posts.forEach(function(item){
            if(JSON.stringify(item.a_id) == document.getElementById('uid').value && JSON.stringify(item.pass) == document.getElementById('pass').value )
            {
                console.log(item)
            }
            else
            {
                alert('Wrong Credentials')
            }
        })
    }
    else
    {
        console.log(error)
    }
}
document.getElementById('button').addEventListener('click',await start())
