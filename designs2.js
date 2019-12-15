// Select color input
// Select size input
// Set variables for Grid height, width, and color
var height;
var width;
var color;

// When size is submitted using Submit Button by the user, call function makeGrid()
// Your code goes here!

$('#sizePicker').submit(function(choice) {
    choice.preventDefault();
    height = $('#inputHeight').val();
    width = $('#inputWidth').val();
    makeGrid(height, width);
    //console.log('choiceHeight: ' + height + ' and choiceWidth: ' + width);
})
//clear any previous grids
function makeGrid(row, coll) {
    $('tr').remove();

    //create new grid table (rows and collumns)
    for (var i = 1; i <= row; i ++) {
        $('#pixelCanvas').append('<tr id = table' + i + '></tr>');
        for (var j = 1; j <= coll; j++) {
            $('#table' + i).append('<td style="background-color: white"></td>');
        }
    }   


    //alert("Hello");
    //add color to the grid squares
    $('td').click(function paintGrid() {
        color = $('#colorPicker').val();
        //console.log('console.log for this', this);

        if ($(this).attr('style')) {
            $(this).removeAttr('style')
        } else {
            $(this).attr('style', 'background-color:' + color);
        }
    
    })

}