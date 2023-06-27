/*
Step 1: Find the lowest number from 
*/
function selectionSort() {
    let toSortArray = [5, 2, 3, 8, 6];
    for (let i = 0; i < n; i++) {
        let tempIndex = i;
        for (let j = i; j < n; j++) {
            if (toSortArray[j] < toSortArray[tempIndex]) {
                tempIndex = j;
            }
        }
        swapFirst(tempIndex, toSortArray, i);
    }
}

function swapFirst(index, arr, firstIndex) {
    let tempVal = arr[index];
    arr[index] = arr[firstIndex];
    arr[firstIndex] = tempVal;
}
