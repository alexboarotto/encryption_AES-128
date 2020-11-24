//shifts row by row index amount
//[ex. state[0] -> 0 shift; state[1] -> 1 shift; ...]
export function shiftRows(state: any[][]) {
    for (let i = 0; i < 4; i++) ShiftRow(state[i], i)
    return state
}      

//shifts elements of an array based on the number of rotations provided as parameter
export function ShiftRow(row: any[], num: number) {
    for (let i = 0; i < num; i++) rotateLeftByOne(row)
    return row
}


function rotateLeftByOne(array: any[]) {
    let temp = array[0] //saves the first element in a temporary variable
    for (let i = 0; i < array.length - 1; i++) array[i] = array[i + 1] //moves all elements to the previous index in the array
    array[array.length - 1] = temp //sets the temporary variable (first element of array) as the last element
}