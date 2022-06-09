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

    def DFS_pre_order(self, current, visited=[]):
        if current:
            visited.append(current)
            if current.left: self.DFS_pre_order(current.left, visited)
            if current.right: self.DFS_pre_order(current.right, visited)

        return visited

    def DFS_post_order(self, current, visited=[]):
        if current:
            self.DFS_post_order(current.left)
            self.DFS_post_order(current.right)
            visited.append(current)
        return visited

    def DFS_in_order(self, current, visited=[]):
        if current:
            self.DFS_in_order(current.left)
            visited.append(current)
            self.DFS_in_order(current.right)
        return visited



bst = BinarySearchTree()
bst.insert(50)
bst.insert(20)
bst.insert(53)
bst.insert(11)
bst.insert(22)
bst.insert(52)
bst.insert(78)
print(bst.DFS_pre_order(bst.root))
print(bst.DFS_post_order(bst.root))
print(bst.DFS_in_order(bst.root))
