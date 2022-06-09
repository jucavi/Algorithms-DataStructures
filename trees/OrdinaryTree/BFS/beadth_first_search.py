import queue

class Node:
    def __init__(self, value):
        self.value = value
        self.left = None
        self.right = None

    def __str__(self):
        return f'< {self.value} >'

    def __repr__(self):
        return f'< {self.value} >'


class BinarySearchTree:
    def __init__(self):
        self.root = None

    def insert(self, value):
        node = Node(value)
        if not self.root:
            self.root = node
            return self

        current = self.root
        while True:
            # LEFT
            if current.value > value:
                if not current.left:
                    current.left = node
                    return self
                current = current.left

            # RIGHT
            if current.value < value:
                if not current.right:
                    current.right = node
                    return self
                current = current.right

    def find(self, value):
        current = self.root

        while True:
            if not current:
                return False
            if current.value == value:
                return current

            if current.value > value:
                current = current.left
            elif current.value < value:
                current = current.right

    def BFS(self):
        q = queue.Queue()
        visited = []

        if self.root:
            q.put(self.root)
            while not q.empty():
                current = q.get()
                visited.append(current)
                if current.left:
                    q.put(current.left)
                if current.right:
                    q.put(current.right)
        return visited
