document.getElementById('add-money').addEventListener('click',function (event) {
    event.preventDefault();
    console.log("Pushed");

    const amount = document.getElementById('amount-value').value;
    const pin = document.getElementById('pin-number').value;
    console.log(amount);
    console.log(pin);
    document.getElementById('amount-value').value='';
    document.getElementById('pin-number').value='';



    
})