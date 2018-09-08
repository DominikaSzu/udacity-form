document.addEventListener('DOMContentLoaded', function() {

    const generalInfo = document.querySelector('.general-info'); const shippingAddress = document.querySelector('.shipping-address'); 
    const paymentInfo = document.querySelector('.payment-info'); const billingAddress = document.querySelector('.billing-address');
    let progressBar = document.querySelector('#progress');  
    let submitButton = document.querySelector('#submit');
    let allTextInputs = Array.from(document.getElementsByClassName('text-input'));
    const sameBillingAddressBtn = document.querySelector('#same-billing-address');
    const cardNumberInput = document.querySelector('#card-number-input');
    
//    Event listeners to mark the progress on progress bar
    
    generalInfo.addEventListener('keypress', function() {
        progressBar.setAttribute('value', '25');
    });
    
    shippingAddress.addEventListener('keypress', function() {
        progressBar.setAttribute('value', '50');
    });
    
    paymentInfo.addEventListener('keypress', function() {
        progressBar.setAttribute('value', '75');
    });
    
    billingAddress.addEventListener('keypress', function() {
        progressBar.setAttribute('value', '100');
    });
    
    
//    Validation of inserted data

    submitButton.addEventListener('click', function(event) {

        let cardNr = /^(?:4[0-9]{12}(?:[0-9]{3})?)$/;
        if (cardNumberInput.value.match(cardNr)) {
            cardNumberInput.setCustomValidity('');
        } else {
            cardNumberInput.setCustomValidity('Please insert your credit card number');
            console.log('no')
        }
    })
    
//    Show fieldset for different billing address if needed
    
    sameBillingAddressBtn.addEventListener('change', function() {
        billingAddress.classList.toggle('hide-it');
    });
    
});