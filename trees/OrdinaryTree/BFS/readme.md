# Steeps - Iteratively

1. Create a queue(this can be an array) and a variable to store the value of nodes visited
2. Place the root node in the queue
3. Loop as long as there is anything in the queue
    1. Dequeue a node from the queue and push the value of the node into the variable that stores the nodes
    2. If there is a left property on the node dequeued - add it to the queue
    3. If there is a right property on the node dequeued - add it to the queue
4. Return the variable that stores the values