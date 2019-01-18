/*

projekt
dt162g
maria ågren 2019
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
        url: "https://thawing-island-33722.herokuapp.com/api/birds/add/",
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
    
    });
}

//delete fågel
function deleteBird(id) {
    $.ajax({
        type:"DELETE",
        url: "https://thawing-island-33722.herokuapp.com/api/birds/delete/"+id
    }).done(function(response){
        console.log(response);

     
    });    
}


