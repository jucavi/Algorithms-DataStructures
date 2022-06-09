from select import select


class Node:
    def __init__(self, value):
        self.value = value
        self.left = None
        self.right = None

    def __str__(self):
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
            if not current: return False
            if current.value == value: return current

            if current.value > value:
                current = current.left
            elif current.value < value:
                current = current.right


bst = BinarySearchTree()
bst.insert(12)
bst.insert(10)
bst.insert(14)
bst.insert(23)
bst.insert(8)
print(bst.find(231))
