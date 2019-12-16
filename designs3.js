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
    
})
//clear any previous grids
function makeGrid(row, col) {
    $('tr').remove();

    //create new grid table (rows and columns)
    for (var i = 1; i <= row; i ++) {
        $('#pixelCanvas').append('<tr id = table' + i + '></tr>');
        for (var j = 1; j <= col; j++) {
            $('#table' + i).append('<td></td>');
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
            $(this).css('background-color', color);
        }
    
    })

}