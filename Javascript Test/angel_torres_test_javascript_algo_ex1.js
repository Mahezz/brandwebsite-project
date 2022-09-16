var to_check = new Array(9);

window.onload = F12(F11());

function F11(){
    // we transfer "array_number" from other js file into another array in this file (1d)
    var table_digits = array_number;
    to_check = new Array([]);

    for (let i = 0; i < table_digits.length; i++) {
        // we split each positional array to separate the numbers in order to create the new array (2d)
        to_check[i] = table_digits[i].split(' ');
    }

    return to_check;
}

function F12(to_check){
    // getting the element table by id
    table = document.getElementById("table");

    for(var i = 0; i < to_check.length; i++)
    {
        // create a new row
        var newRow = table.insertRow(table.length);
        for(var j = 0; j < to_check[i].length; j++)
        {
            // create a new cell
            var cell = newRow.insertCell(j);
            
            // add value to the cell
            cell.innerHTML = to_check[i][j];
        }
    }
}