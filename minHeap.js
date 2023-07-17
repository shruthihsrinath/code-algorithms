class MinHeap {

    constructor() {
        //declare array for values
        this.values = [];
    }

    parent(index) {
        return Math.floor((index - 1) / 2);
    }

    //heap always starts by filling the leftmost child
    leftChild(index) {
        return (index * 2) + 1;
    }

    rightChild(index) {
        return (index * 2) + 2;
    }

    isLeaf(index) {
        return (index >= this.values.length / 2 && index <= this.values.length - 1);
    }

    swap(index1, index2) {
        [this.values[index1], this.values[index2]] = [this.values[index2], this.values[index1]];
    }

    //the lowest value always stays in the root
    heapifyUp(index) {
        let currentIndex = index;
        let parentIndex = this.parent(currentIndex);

        while (currentIndex > 0 && this.values[currentIndex] < this.values[parentIndex]) {
            this.swap(currentIndex, parentIndex);
            currentIndex = parentIndex;
            parentIndex = this.parent(currentIndex);
        }
    }

    add(value) {
        this.values.push(value);
        this.heapifyUp(this.values.length - 1);
    }

    heapifyDown(index) {
        if (!this.isLeaf(index)) {
            let leftChild = this.leftChild(index);
            let rightChild = this.rightChild(index);
            let smallestValIndex = index;

            if (this.values[leftChild] < this.values[smallestValIndex])
                smallestValIndex = leftChild;

            if (this.values[rightChild] <= this.values[smallestValIndex])
                smallestValIndex = rightChild;

            if (smallestValIndex != index) {
                this.swap(smallestValIndex, index);
                this.heapifyDown(smallestValIndex);
            }
        }
    }

    poll() {
        let min = this.values[0];
        let end = this.values.pop();

        this.values[0] = end;
        this.heapifyDown(0);
    }
}