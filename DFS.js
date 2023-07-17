class DeapthFirstSearch {
    constructor() {
        this.nodes = [];
        this.edges = new Map();
    }

    DFS(node) {
        //new stack to store the nodes to be visited
        let stack = new Array(this.nodes.length);
        //new set to store the visited edges
        let visited = new Set();

        stack.push(node);
        visited.add(node);

        while (stack.length != 0) {
            let tempNode = stack.pop();
            //any operation you want to do on the current node the logic goes here

            this.edges.get(tempNode).filter(edge => !visited.has(edge)).forEach(element => {
                visited.add(element);
                stack.push(element);
            });
        }
    }
}