document.addEventListener('DOMContentLoaded', function() {

    const generalInfo = document.querySelector('.general-info');
    console.log(generalInfo);    
    const shippingAddress = document.querySelector('.shipping-address');
    console.log(shippingAddress);    
    const paymentInfo = document.querySelector('.payment-info');
    console.log(paymentInfo);    
    const billingAddress = document.querySelector('.billing-address');
    console.log(billingAddress);
    let progressBar = document.querySelector('#progress');
    console.log(progressBar)
    
    generalInfo.addEventListener('keypress', function() {
        progressBar.setAttribute('value', '25');
    })
    
    shippingAddress.addEventListener('keypress', function() {
        progressBar.setAttribute('value', '50');
    })
    
    paymentInfo.addEventListener('keypress', function() {
        progressBar.setAttribute('value', '75');
    })
    
    billingAddress.addEventListener('keypress', function() {
        progressBar.setAttribute('value', '100');
    })
    
    
});