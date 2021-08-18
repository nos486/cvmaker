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
 * @param {Array} arr
 * @param {*} oldValue
 * @param {*} newValue
 * @return {Array}
 */
function moveItemInArrayByValue(arr, oldValue, newValue) {
    let oldIndex = arr.indexOf(oldValue)
    let newIndex = arr.indexOf(newValue)

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
 * @param {Array} arr
 * @param {*} item
 * @return {Array}
 */
function removeItemFromArray(arr,item) {
    let index = arr.indexOf(item)
    arr.splice(index, 1);
    return arr;
}


/**
 *
 * @param {Array} arr
 * @param {*} item
 * @param {Number} index
 * @return {Array}
 */
function addItemToArray(arr,item, index=null) {
    if(index== null){
        arr.push(item)
    }else {
        arr.splice(index, 0,item);
    }
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
    moveItemInArrayByValue,
    addItemToArray,
    removeItemFromArray,
    numberToMonthName
}