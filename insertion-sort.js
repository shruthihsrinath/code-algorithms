/*
Basic understanding:
each element taken is compared 
with the previous elements of the array
and the positions are exchanged if the 
selected element is lower than the previous elements.

Its like inserting a lower element before the higher elements

*/
function insertionSort() {
    let chArray = ['S', 'O', 'R', 'T', 'E', 'X', 'A', 'M', 'P', 'L', 'E'];
    let currentIdx = 0;

    while (currentIdx < chArray.length) {
        for (let prevIdx = 0; prevIdx <= currentIdx; prevIdx++) {
            if (chArray[currentIdx] < chArray[prevIdx]) {
                //swap current with previouse index
                let temp = chArray[prevIdx];
                chArray[prevIdx] = chArray[currentIdx];
                chArray[currentIdx] = temp;
            }
        }
        currentIdx++;
    }
    chArray.forEach(el => console.log(el));
}