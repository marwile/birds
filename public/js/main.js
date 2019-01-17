/*

projekt
dt162g
maria ågren 2019
*/





/*
window.onload = loadList();

//hämta lista med alla fåglar
function loadList(){

    $.getJSON("http://localhost:3000/api/birds/", function(data){


        $("#list").html(""); // ta bort data och sätt tom sträng
        for (var i = 0; i< data.length; i++){
            $("#list").append("<tr><td>" + data[i].birdName +"</td><td>"+ data[i].birdPlace + "</td><td>" + data[i].birdMonth+"</td><td>"+ data[i].birdYear + "</td><td>"+ data[i].birdUser + "</td><td>"+ data[i].birdLink + "</td><td id='remove' onclick= 'deleteBird(\"" +data[i]._id+"\")'>&#x1f5d1;</td></tr>");
        }
    })
}
*/

// Lägg till fågel
function addBird(event) {
    // Läs in värden
    var birdNameValue = document.getElementById("birdName").value;
    var birdPlaceValue = document.getElementById("birdPlace").value;
    var birdMonthValue = document.getElementById("birdMonth").value;
    var birdYearValue = document.getElementById("birdYear").value;
    var birdUserValue = document.getElementById("birdUser").value;
    var birdLinkValue = document.getElementById("birdLink").value;

    // AJAX-anrop
    $.ajax({
        type: "POST",
        url: "http://localhost:3000/api/birds/add/",
        data: { birdName: birdNameValue, birdPlace: birdPlaceValue, birdMonth: birdMonthValue, birdYear: birdYearValue, birdUser: birdUserValue, birdLink: birdLinkValue }
    }).done(function(response) {
        console.log(response);

        // Rensa fält
        document.getElementById("birdName").value = "";
        document.getElementById("birdPlace").value = "";
        document.getElementById("birdMonth").value = "";
        document.getElementById("birdYear").value = "";
        document.getElementById("birdUser").value = "";
        document.getElementById("birdLink").value = "";
        
        // Ladda om listan
    //    loadList();
    });
}

//delete kurs
function deleteBird(id) {
    $.ajax({
        type:"DELETE",
        url: "http://localhost:3000/api/birds/delete/"+id
    }).done(function(response){
        console.log(response);

     
    });    
}


