var interval = 1000; // 1000 = 1 second, 3000 = 3 seconds
function doAjax() {
    $.ajax({
        type: 'GET',
        url: 'http://localhost:3000/admin/exportFlow',
        data: $(this).serialize(),
        dataType: 'json',
        success: function(data) {
            $('.js-exportable').val(data); // first set the value     
        },
        complete: function(data) {
            // Schedule the next
            setTimeout(doAjax, interval);
        }
    });
}
setTimeout(doAjax, interval);
// INITALIZING FARMERS DATA TABLE / COLLECTION REFERENCE
var exportTradeRef = firebase.database().ref().child('exportTradeFlowData');

function getExportTradeFlowData() {

    var rootRef = exportTradeRef;

    rootRef.on("child_added", function(snap) {
        var fetchedName = snap.child("name").val();
        // var fetchedEmail = snap.child("email").val();
        // var fetchedAddress = snap.child("address").val();
        var fetchedPhone = snap.child("phone").val();
        var fetchedProducts = snap.child("products").val();
        var fetchedWeight = snap.child("weight").val();
        var fetchedTonage = snap.child("tonage").val();
        var fetchedValue = snap.child("value").val();
        var fetchedDistrict = snap.child("district").val();
        // var fetchedRegion = snap.child("region").val();
        //var fetchedCountryFrom = snap.child("countryFROM").val();
        var fetchedCountryTo = snap.child("countryTO").val();
        var fetchedDate = snap.child("date").val();


        // console.log(fetchedDistrict+ ' ' + fetchedWHS_Price);

        var row = document.createElement("tr");

        var cell = "";

        // creating and assigning the table data to the element
        cell = document.createElement("td");
        // cell_2 = document.createElement("td");
        // cell_3 = document.createElement("td");
        cell_4 = document.createElement("td");
        cell_5 = document.createElement("td");
        // cell_6 = document.createElement("td");
        cell_7 = document.createElement("td");
        cell_8 = document.createElement("td");
        cell_9 = document.createElement("td");
        // cell_10 = document.createElement("td");
        //cell_11 = document.createElement("td");
        cell_12 = document.createElement("td");
        cell_13 = document.createElement("td");


        // creating and assigning the TextNodes to the table
        var cellText = document.createTextNode(fetchedName);
        // var cellText_2 = document.createTextNode(fetchedEmail);
        // var cellText_3 = document.createTextNode(fetchedAddress);
        var cellText_4 = document.createTextNode(fetchedPhone);
        var cellText_5 = document.createTextNode(fetchedProducts);
        var cellText_6 = document.createTextNode(fetchedWeight);
        var cellText_7 = document.createTextNode(fetchedTonage);
        var cellText_8 = document.createTextNode(fetchedValue);
        var cellText_9 = document.createTextNode(fetchedDistrict);
        // var cellText_10 = document.createTextNode(fetchedRegion);
        //var cellText_11 = document.createTextNode(fetchedCountryFrom);
        var cellText_12 = document.createTextNode(fetchedCountryTo);
        var cellText_13 = document.createTextNode(fetchedDate);


        // appending the TextNodes to the cells 
        cell.appendChild(cellText);
        // cell_2.appendChild(cellText_2);
        // cell_3.appendChild(cellText_3);
        cell_4.appendChild(cellText_4);
        cell_5.appendChild(cellText_5);
        cell_6.appendChild(cellText_6);
        cell_7.appendChild(cellText_7);
        cell_8.appendChild(cellText_8);
        cell_9.appendChild(cellText_9);
        // cell_10.appendChild(cellText_10);
        //cell_11.appendChild(cellText_11);
        cell_12.appendChild(cellText_12);
        cell_13.appendChild(cellText_13);

        // appending the cells to the rows
        row.appendChild(cell);
        // row.appendChild(cell_2);
        // row.appendChild(cell_3);
        row.appendChild(cell_4);
        row.appendChild(cell_5);
        // row.appendChild(cell_6);
        row.appendChild(cell_7);
        row.appendChild(cell_8);
        row.appendChild(cell_9);
        // row.appendChild(cell_10);
        //row.appendChild(cell_11);
        row.appendChild(cell_12);
        row.appendChild(cell_13);

        // console.log(row);

        // getting the table ID and prepending the row
        document.getElementById("expoTradeTableBody").prepend(row);

        // var data = row;

        // $(".js-exportable'").DataTable().row.add([data]).draw();

        //      $(function () {

        //         //Exportable table
        //         $('.js-exportable').DataTable({
        //             dom: 'Bfrtip',
        //             responsive: true,
        //             bJQueryUI: true,
        //             destroy: true,
        //             aaData: data,
        //             Columns: [
        //                 { data: 'locality' },
        //                 { data: 'district' },
        //                 { data: 'product' },
        //                 { data: 'date' },
        //                 { data: 'wholesale_price' },
        //                 { data: 'retail_price' }
        //             ],
        //             buttons: [
        //                 'copy', 'csv', 'excel', 'pdf', 'print'
        //             ]
        //         });
        //     });

        // }); 
    });
}

// calling the getExportTradeFlowData function
getExportTradeFlowData();