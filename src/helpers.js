/**
 *
 * @param {Array} arr
 * @param {number} oldIndex
 * @param {number} newIndex
 * @return {Array}
 */
function moveItemInArray(arr, oldIndex, newIndex) {
    if (newIndex >= arr.length) {
        let k = newIndex - arr.length + 1;
        while (k--) {
            arr.push(undefined);
        }
    }
    arr.splice(newIndex, 0, arr.splice(oldIndex, 1)[0]);
    return arr;
}

/**
 *
 * @param {number} number
 * @return {string}
 */
function numberToMonthName(number){
    const monthNames = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"]
    return monthNames[number]
}

export {
    moveItemInArray,
    numberToMonthName
}