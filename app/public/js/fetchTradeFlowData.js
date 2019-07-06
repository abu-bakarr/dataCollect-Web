// INITALIZING FARMERS DATA TABLE / COLLECTION REFERENCE
var tradeFlowRef = firebase.database().ref().child('productTradeFlowData');


function getTradeFlowData() {

    var rootRef = tradeFlowRef;

    rootRef.on("child_added", function(snap) {
        var fetchedProduct = snap.child("product").val();
        var fetchedQuantity = snap.child("tonage").val();
        var fetchedPrice = snap.child("value").val();

        //var fetchedLocality = snap.child("locality").val();
        // var fetchedChiefdom = snap.child("chiefdom").val();
        //var fetchedDistrict = snap.child("district").val();
        // var fetchedRegion = snap.child("region").val();
        var fetchedEnumerator = snap.child("enumerator").val();
        var fetchedDate = snap.child("date").val();
        //var fetchedChiefdomFrom = snap.child("chiefdom_from").val();
        var fetchedDistFrom = snap.child("district_from").val();
        //var fetchedCountryFrom = snap.child("country_from").val();
        // var fetchedLocaTo = snap.child("locality_to").val();
        // var fetchedCheifdomTo = snap.child("chiefdom_to").val();
        var fetchedDistTo = snap.child("district_to").val();
        //var fetchedCountryTo = snap.child("country_to").val();

        var row = document.createElement("tr");

        var cell = "";

        // creating and assigning the table data to the element
        cell_add1 = document.createElement("td");
        cell_add2 = document.createElement("td");
        cell_add3 = document.createElement("td");

        //cell = document.createElement("td");
        // cell_2 = document.createElement("td");
        //cell_3 = document.createElement("td");
        // cell_4 = document.createElement("td");
        cell_5 = document.createElement("td");
        cell_6 = document.createElement("td");
        // cell_7 = document.createElement("td");
        //cell_8 = document.createElement("td");
        cell_9 = document.createElement("td");
        //cell_10 = document.createElement("td");
        // cell_11 = document.createElement("td");
        //cell_12 = document.createElement("td");
        cell_13 = document.createElement("td");
        //cell_14 = document.createElement("td");


        // creating and assigning the TextNodes to the table
        var cellAddText1 = document.createTextNode(fetchedProduct);
        var cellAddText2 = document.createTextNode(fetchedQuantity);
        var cellAddText3 = document.createTextNode(fetchedPrice);

        //var cellText = document.createTextNode(fetchedLocality);
        // var cellText_2 = document.createTextNode(fetchedChiefdom);
        //var cellText_3 = document.createTextNode(fetchedDistrict);
        // var cellText_4 = document.createTextNode(fetchedRegion);
        var cellText_5 = document.createTextNode(fetchedEnumerator);
        var cellText_6 = document.createTextNode(fetchedDate);
        // var cellText_7 = document.createTextNode(fetchedLocaFrom);
        //var cellText_8 = document.createTextNode(fetchedChiefdomFrom);
        var cellText_9 = document.createTextNode(fetchedDistFrom);
        //var cellText_10 = document.createTextNode(fetchedCountryFrom);
        // var cellText_11 = document.createTextNode(fetchedLocaTo);
        //var cellText_12 = document.createTextNode(fetchedCheifdomTo);
        var cellText_13 = document.createTextNode(fetchedDistTo);
        //var cellText_14 = document.createTextNode(fetchedCountryTo);


        // appending the TextNodes to the cells 
        cell_addText1.appendChild(cellAddText1);
        cell_addText2.appendChild(cellAddText2);
        cell_addText3.appendChild(cellAddText3);


        // cell.appendChild(cellText);
        // cell_2.appendChild(cellText_2);
        //cell_3.appendChild(cellText_3);
        // cell_4.appendChild(cellText_4);
        cell_5.appendChild(cellText_5);
        cell_6.appendChild(cellText_6);
        // cell_7.appendChild(cellText_7);
        //cell_8.appendChild(cellText_8);
        cell_9.appendChild(cellText_9);
        //cell_10.appendChild(cellText_10);
        // cell_11.appendChild(cellText_11);
        //cell_12.appendChild(cellText_12);
        cell_13.appendChild(cellText_13);
        //cell_14.appendChild(cellText_14);


        // appending the cells to the rows
        row.appendChild(cell_addText1);
        row.appendChild(cell_addText2);
        row.appendChild(cell_addText3);


        //row.appendChild(cell);
        // row.appendChild(cell_2);
        //row.appendChild(cell_3);
        // row.appendChild(cell_4);
        row.appendChild(cell_5);
        row.appendChild(cell_6);
        // row.appendChild(cell_7);
        //row.appendChild(cell_8);
        row.appendChild(cell_9);
        //row.appendChild(cell_10);
        // row.appendChild(cell_11);
        //row.appendChild(cell_12);
        row.appendChild(cell_13);
        //row.appendChild(cell_14);

        // getting the table ID and prepending the row
        document.getElementById("tradeFlowTableBody").prepend(row);
    });

}

// calling the tradeFlowData\
getTradeFlowData();