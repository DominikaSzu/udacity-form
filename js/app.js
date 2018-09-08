document.addEventListener('DOMContentLoaded', function() {

    const generalInfo = document.querySelector('.general-info'); const shippingAddress = document.querySelector('.shipping-address'); 
    const paymentInfo = document.querySelector('.payment-info'); const billingAddress = document.querySelector('.billing-address');
    let progressBar = document.querySelector('#progress');  
    let submitButton = document.querySelector('#submit');
    let allTextInputs = Array.from(document.getElementsByClassName('text-input'));
    const sameBillingAddressBtn = document.querySelector('#same-billing-address');
    
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
    
    submitButton.addEventListener('click', function() {
        allTextInputs.forEach((textInput) => {
            console.log(textInput.value)
//        if (textInput.value !== '') {
//            textInput.setCustomValidity('');
//        } else {
//            textInput.setCustomValidity('You need to fill it :)');
//        }
    })
    })
    
//    Show fieldset for different billing address if needed
    
    sameBillingAddressBtn.addEventListener('change', function() {
        billingAddress.classList.toggle('hide-it');
    });
    
});