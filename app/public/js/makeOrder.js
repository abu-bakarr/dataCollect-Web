// INITALIZING orders DATA TABLE / COLLECTION REFERENCE
var orderRef = firebase.database().ref('orders');

// this event listener is listening for a form submit
document.getElementById('orderForm').addEventListener('submit', submitOrderForm);
 
// submitFarmersForm function
function submitOrderForm(e){

    //preventing the form from submit automatically
    e.preventDefault();

    // getting the values
    var name = getInptValue('name');
    var address = getInptValue('address');
    var email = getInptValue('email');
    var telephone = getInptValue('telephone');
    var product = getInptValue('product');
    var quantity = getInptValue('quantity');
    
    //calling the send and save data
    saveMarketData(name,address,email,telephone,product,quantity);
    
    // clear form
    document.getElementById('orderForm').reset();
}

// function to get form inputs
function getInptValue(id){
    return document.getElementById(id).value;
}

// SEND AND SAVE MESSAGE TO FIREBASE FUNCTION
function saveMarketData(name,address,email,telephone,product,quantity){
    var newOrderRef = orderRef.push()

    newOrderRef.set({
        name: name,
        address: address,
        email: email,
        telephone: telephone,
        product: product,
        quantity: quantity
        
    });
}
