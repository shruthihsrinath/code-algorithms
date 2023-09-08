class BreadthFirstSearch {
    constructor() {
        this.nodes = [];
        this.edges = new Map();
    }

    BFS(node) {
        //same as DFS except that a queue is used instead of a stack
        let queue = new Array(this.nodes.length);

        let visited = new Set();

        queue.push(node);
        visited.add(node);

        while (queue.length != 0) {
            let tempNode = queue.shift();
            //any operation you want to conduct on the tempnode goes here

            this.edges.get(tempNode).filter(edge => !visited.has(edge)).forEach(element => {
                queue.push(element);
                visited.add(element);
            });
        }
    }
}