// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()

var inputRows;
var inputCols;

//makeGrid() function which creates the pixel grid
function makeGrid() {
    var table = document.getElementById("pixelCanvas");
    while(table.rows.length > 0)
        table.deleteRow(0);
    inputRows = document.getElementById("inputHeight").value;
    inputCols = document.getElementById("inputWeight").value;
    for (var x = 0; x < inputRows; x++) {
        var row_elem = table.insertRow(x);
        row_elem.setAttribute("class", "row");
        for (var y = 0; y < inputCols; y++) {
            var cell= row_elem.insertCell(y);
            cell.addEventListener('click', function(evt) {
                evt.target.style.backgroundColor = document.getElementById("colorPicker").value;
            });
        }
    }
    return false;
}

document.getElementById("sizePicker").addEventListener("submit", function(evt) {
    evt.preventDefault();
    makeGrid();
    
})