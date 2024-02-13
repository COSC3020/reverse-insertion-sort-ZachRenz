function insertionSortReverse(array) {
    for(let i = array.length-2; i >= 0; i--) {
        let val = array[i];
        let j;
        for(j = i + 1; j < array.length && array[j] < val; j++) {
            array[j-1] = array[j];
            //console.log(array);
        }
        array[j-1] = val;
        //console.log(array, i);
    }
    return array;
}

//console.log(insertionSortReverse([1,0,0]))

// for(var i = 1; i < arr.length; i++) {
//     var val = arr[i];
//     var j;
//     for(j = i; j > 0 && arr[j-1] > val; j--) {
//       arr[j] = arr[j-1];
//     }
//     arr[j] = val;
//   }