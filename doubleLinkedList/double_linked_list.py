class Node:
    def __init__(self, value):
        self.value = value
        self.prev = None
        self.next = None

    def __str__(self):
        return f'{self.value}'

class DoubleLinkedList:
    def __init__(self):
        self.head = None
        self.tail = None
        self.length = 0

    def append(self, value):
        node  = Node(value)
        if not self.head:
            self.head = node
            self.tail = node
        else:
            node.prev = self.tail
            self.tail.next = node
            self.tail = node
        self.length += 1
        return self

    def pop(self):
        if not self.head:
            return None

        current = self.tail
        if self.head == self.tail:
            self.head = None
            self.tail = None
        else:
            self.tail = current.prev
            self.tail.next = None
        self.length -= 1
        current.prev = None
        return current

    def shift(self):
        if not self.head:
            return None

        current = self.head
        if self.head == self.tail:
            self.head = None
            self.tail = None
        else:
            self.head = current.next
            self.head.prev = None
        self.length -= 1
        current.next = None
        return current

    def unshift(self, value):
        node = Node(value)
        if not self.head:
            self.head = node
            self.tail = node
        else:
            node.next = self.head
            self.head.prev = node
            self.head = node
        self.length += 1
        return self

    def get_node(self, index):
        if not 0 <= index < self.length:
            return None
        if (self.length / 2 > index):
            count = 0
            current = self.head
            while count != index:
                current = current.next
                count += 1
        else:
            count = self.length - 1
            current = self.tail
            while count != index:
                current = current.prev
                count -= 1

        return current

    def set_node(self, index, value):
        current = self.get_node(index)
        if current:
            current.value = value
            return True
        return False

    def insert(self, index, value):
        pass

    def remove(self, value):
        pass

    def __str__(self):
        current = self.head
        arr = []
        while current:
            arr.append(current)
            current = current.next

        return ' <-> '.join(arr)
