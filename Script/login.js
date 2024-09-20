

document.getElementById('btn-login').addEventListener('click',function(event){
    event.preventDefault();
    console.log('Login button clicked');
    const phone = document.getElementById('phone-number').value;
    console.log(phone);
    const pin_value = document.getElementById('pin-field').value;
    console.log(pin_value);
    document.getElementById('phone-number').value="";
    document.getElementById('pin-field').value="";
    window.location.href='./home.html';

})