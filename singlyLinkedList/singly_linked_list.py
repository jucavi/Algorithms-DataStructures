class Node:
    def __init__(self, value):
        self.value = value
        self.next = None

    def __repr__(self):
        return f'<Node: {self.value}>'


class SinglyLinkedList:
    def __init__(self):
        self.head = None
        self.tail = None
        self.length = 0

    def append(self, value):
        node = Node(value)
        if not self.head:
            self.head = node
            self.tail = node
        else:
            self.tail.next = node
            self.tail = node
        self.length += 1
        return self

    def pop(self):
        if not self.head:
            return None
        current = self.head
        current_tail = current
        if self.head == self.tail:
            self.head = None
            self.tail = None
            self.length = 0
        else:
            while current.next:
                current_tail = current
                current = current.next
            self.tail = current_tail
            self.tail.next = None
            self.length -= 1

        return current

    def unshift(self, value):
        node = Node(value)
        if not self.head:
            self.head = node
            self.tail = node
        else:
            current = self.head
            self.head = node
            self.head.next = current
        self.length += 1
        return self

    def shift(self):
        if not self.head:
            return None

        current = self.head
        self.head = current.next

        if not self.head:
            self.tail = None
        self.length -= 1
        return current

    def get_at(self, index):
        if not (0 <= index < self.length):
            return None
        current = self.head
        count = 0

        while count != index:
            current = current.next
            count += 1
        return current

    def set_at(self, index, value):
        node  = self.get_at(index)
        if node:
            node.value = value
            return True
        return False

    def insert(self, index, value):
        if not (0 <= index < self.length):
            return False
        if index == 0:
            return bool(self.unshift(value))
        if index == self.length:
            return bool(self.append(value))

        prev_node = self.get_at(index - 1)
        node = Node(value)
        next_node = prev_node.next
        node.next = next_node
        prev_node.next = node
        self.length += 1
        return True

    def remove(self, index):
        if not (0 <= index < self.length):
            return False

        if index == 0:
            return bool(self.shift())
        if index == (self.length - 1):
            return bool(self.pop())

        prev_node  = self.get_at(index - 1)
        remove_node = prev_node.next
        prev_node.next = remove_node.next
        self.length -= 1
        return True

    def reverse(self):
        node = self.head
        self.head = self.tail
        self.tail = node
        prev = None

        for _ in range(self.length):
            next_node = node.next
            node.next = prev
            prev = node
            node = next_node
        return self


    def __repr__(self):
        items = []
        current = self.head
        while current:
            items.append(str(current.value))
            current = current.next

        return ' -> '.join(items)

