//maxheap is a complete binary tree
//complete binary has all leaves
//and all leaves by default start as 
//leftmost child.
class MaxHeap {
    constructor() {
        this.values = [];
    }

    parent(index) {
        return Math.floor((index - 1) / 2);
    }


    leftChild(index) {
        return (index * 2) + 1;
    }

    rightChild(index) {
        return (index * 2) + 2;
    }

    isLeaf(index) {
        if (index >= Math.floor(this.values.length / 2 && index <= this.values.length - 1))
            return true;
    }

    swap(index1, index2) {
        [this.values[index1], this.values[index2]] = [this.values[index2], this.values[index1]];
    }

    heapifyUp(index) {
        let currentIndex = index,
            parentIndex = this.parent(currentIndex);

        //until we reach the root index and and we dont have the value at current index > value at parent index
        while (currentIndex > 0 && this.values[currentIndex] > this.values[parentIndex]) {
            this.swap(currentIndex, parentIndex);
            currentIndex = parentIndex;
            parentIndex = this.parent(currentIndex);
        }
    }

    //insert into max heap
    add(value) {
        this.values.push(value);
        //arrange the tree from leaf to root until you get the highest value in the root
        this.heapifyUp(this.values.length - 1);
    }

    heapifyDown(index) {
        //if the node has children
        if (!this.isLeaf(index)) {
            //get the left child
            let leftChild = this.leftChild(index);
            //get right child
            let rightChild = this.rightChild(index);

            let currentIndex = index;

            if (this.values[leftChild] > this.values[currentIndex])
                currentIndex = leftChild;

            if (this.values[rightChild] >= this.values[currentIndex])
                currentIndex = rightChild;

            if (currentIndex != index) {
                this.swap(currentIndex, index);
                this.heapifyDown(currentIndex);
            }
        }
    }

    //pull the max value / root from the heap
    poll() {
        if (this.values.length < 1) return "heap is empty";

        const max = this.values[0];
        const end = this.values.pop();

        //assign the last leaf value to root index
        this.values[0] = end;

        //bring down the root value to proper place in the tree
        // this in turn sorts out all the values in the tree and keeps the
        // max value in the root
        this.heapifyDown(0);

    }
}