$(function() {

    $.getJSON('market_Data_Api'); //getting data

    // checking for a form submission
    $('.marketDataApiForm').submit(function(e){
        e.preventDefault();
        // making an ajax post request to the server
        // $.post('postMarketData', {
        //    district: $('#district').val(),
        //    product: $('#product').val(),
        //    price: $('#price').val()
        // });

         var district: $('#district').val(),
         var product: $('#product').val(),
         var price: $('#price').val()

         // ajax post request
        $.ajax({
            type : 'POST',
            url :  'postMarketData',
            data : {
                  'district': district,
                  'product': product,
                  'price': price
            },
            success: =>(data){
              console.log(data);
            }
        });

    });

});
