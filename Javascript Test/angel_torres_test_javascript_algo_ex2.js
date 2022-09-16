
//In the browser´s console you can check if the input array is correct or incorrect.
//If you put invalid numbers in the original array ("array_number" in "javascript_test_je1.js"), for example: (in a row two identical numbers) ->
//-> The F21 function will return FALSE.
console.log(F21(to_check));

function F21(board){
    for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) {
            const value = board[i][j];
            if (value !== '.') {
                //here we validate row, column and box passing the correct array
                if (!validRow(board, i, j, value) || !validColumn(board, i, j, value) || value>=10 | !validBox(board, i, j, value) ) {
                    return false;
                }
            }
        }
    }
    return true;
}

function validRow(board, row, col, value) {
    // j represents on column
    for (let j = 0; j < 8; j++) {
        // check if the current column matches the passed in column
        if (j !== col) {
            if (board[row][j] === value) {
                
                return false; 
            }
        }
    }
    
    return true;
}

function validColumn(board, row, col, value) {
    // j represents on row
   for (let i = 0; i < 8; i++) {
       // check if the current row matches the passed in row
       if (i !== row) {
           if (board[i][col] === value) {
               return false; 
               
           }
       }
   }
   
   return true;
}

function validBox(board, row, col, value) {
    const startRow = row - (row % 3), startCol = col - (col % 3);
    
    for (let i = startRow; i < startRow + 3; i++) {
        for (let j = startCol; j < startCol + 3; j++) {
            if (i !== row && j !== col) {
                if (board[i][j] === value) {
                    return false;
                }
            }
        }
    }
    
    return true;
}