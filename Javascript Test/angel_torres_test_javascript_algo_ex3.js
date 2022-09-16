var tableDisplay = document.getElementById("tableErrors");

window.onload(F31(to_check));

function F31(board){
    var tblBody = document.createElement("tbody");
        var row = document.createElement("tr");
        var cell = document.createElement("td");
    
    if(F21(board)==true){
        var cellText = document.createTextNode("The table is correct");  
    } else{
        var cellText = document.createTextNode("The table is incorrect");  
    }

    tableDisplay.appendChild(tblBody);
    cell.appendChild(cellText);
    row.appendChild(cell);
    tblBody.appendChild(row);
}