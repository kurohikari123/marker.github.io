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
     
    if(document.getElementById('u_id').value.length==0 || document.getElementById('ph_no').value.length==0 || document.getElementById('address').value.length==0 || document.getElementById('u_pass').value.length==0 || document.getElementById('email').value.length==0 || document.getElementById('firstname').value.length==0 || document.getElementById('lastname').value.length==0)
    {
       alert('Information Incomplete')
    }
     else
     {
        var phoneno = /^\+?([0-9]{2})\)?[-. ]?([0-9]{4})[-. ]?([0-9]{4})$/;
        if(document.getElementById('ph_no').value.match(phoneno))
        {
            var form=document.getElementById('form')
            document.getElementById('error5').style.display="none"
            const {error}=await supa
            .from('users')
            .insert({u_id:document.querySelector('#u_id').value,
            u_ph:document.querySelector('#ph_no').value.toString(),
            u_address:document.querySelector('#address').value,
            u_pass:document.querySelector('#u_pass').value,
            u_mail:document.querySelector('#email').value,
            u_firstname:document.querySelector('#firstname').value,
            u_lastname:document.querySelector('#lastname').value,
            created_time:time,
            updated_time:time,
            created_date:date,
            updated_date:date})

            if(error == null)
            {
                form.reset()
                document.getElementById('error1').style.display="none"
                document.getElementById('error2').style.display="none"
                document.getElementById('error3').style.display="none"
                document.getElementById('error4').style.display="none"
                document.getElementById('error5').style.display="none"
            }
            const {message}=error
            //////////////////////////////////////////////////////////////////////////
            if(message == 'duplicate key value violates unique constraint "users_u_ph_key"')
            {
                document.getElementById('error1').style.display="initial"
            }
            else
            {
                document.getElementById('error1').style.display="none"
            }
        
        //////////////////////////////////////////////////////////////////////////////////
            if(message == 'duplicate key value violates unique constraint "users_u_mail_key"')
            {
                document.getElementById('error2').style.display="initial"
            }
            else{
                document.getElementById('error2').style.display="none"
            }
        ////////////////////////////////////////////////////////////////////////////////
        
            if(message == 'duplicate key value violates unique constraint "users_pkey"')
            {
                document.getElementById('error3').style.display="initial"
            }
            else{
                document.getElementById('error3').style.display="none"
            }
            console.log(error)
            return true
        }
        ////////////////////////////////////////////////////////////////////////////////////
        else
        {
            document.getElementById('error1').style.display="none"
            document.getElementById('error5').style.display="initial"
            return false
        }
    }
         
    }
function check()
{
    if(document.getElementById('confirm').value != document.getElementById('u_pass').value)
    {
        document.getElementById('error4').style.display="initial"
    }
    else if(document.getElementById('u_pass').value ==""){
        document.getElementById('error4').style.display="none"
    }
    else{
        document.getElementById('error4').style.display="none"
    }
}

document.querySelector('.signin').addEventListener('click',register)
users();
document.getElementById('confirm').addEventListener('keyup',check)

