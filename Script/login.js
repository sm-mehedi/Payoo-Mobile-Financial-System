

document.getElementById('btn-login').addEventListener('click',function(event){
    event.preventDefault();
    console.log('Login button clicked');
    const phone = document.getElementById('phone-number').value;
    console.log(phone);

})