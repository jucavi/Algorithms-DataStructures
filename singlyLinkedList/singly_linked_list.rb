class Node
    attr_accessor :value, :next

    def initialize(value)
        @value = value
        @next = nil
    end

    def to_s()
        "#{@value}"
    end
end

class SinglyLinkedList
    def initialize()
        @head = nil
        @tail = nil
        @size = 0
    end

    def empty?
        if @head == nil
            return true
        end
        return false
    end

    def push(val)
        node  = Node.new(val)

        if self.empty?
            self.init(node)
        else
            @tail.next = node
            @tail = node
        end
        @size += 1
        return self
    end

    def pop
        return nil if self.empty?
        current = @head
        if @head == @tail
            self.clear
            return current
        end
        while current.next
            current_tail = current
            current = current.next
        end
        @tail = current_tail
        @tail.next = nil
        @size -= 1
        return current
    end

    def unshift(value)
        node = Node.new(value)

        if self.empty?
            self.init(node)
        else
            node.next = @head
            @head = node
        end
        @size += 1
        return self
    end

    def shift
        return nil if self.empty?
        current = @head
        if @head == @tail
            self.clear
            return current
        end
        @head = @head.next
        @size -= 1
        return current
    end

    def get(index)
        return nil if not (0 <= index && index < @size)
        return nil if self.empty?

        count = 0
        current = @head
        while count != index
            current = current.next
            count += 1
        end
        return current
    end

    def set(index, value)
        node = self.get(index)
        if node
            node.value = value
            return true
        end
        return false
    end

    def insert(index, value)
        if index == 0
            return self.unshift(value)
        end

        if index == @size
            return self.push(value)
        end

        prev_node = self.get(index - 1)
        if prev_node
            node = Node.new(value)
            tmp = prev_node.next
            node.next = tmp
            prev_node.next = node
            @size += 1
            return self
        end
        return nil
    end

    def remove(index)
        if index == 0
            return self.shift
        end

        if index == @size - 1
            return self.pop
        end

        prev_node = node.get(index - 1)
        if prev_node
            del_node = prev_node.next
            prev_node.next = del_node.next
            @size -= 1
            return del_node
        end
        return  nil
    end

    def reverse
        current = @head
        @head = @tail
        @tail = current
        prev = nil
        while current
            next_node = current.next
            current.next = prev
            prev = current
            current = next_node
        end
        return self
    end

    def to_s
        current = @head
        arr = []
        while current
            arr << current.value
            current = current.next
        end
        arr.join(" -> ")
    end

    def clear
        @head = nil
        @tail = nil
        @size = 0
        return self
    end

    def init(node)
        @head = node
        @tail = node
    end

    protected :clear, :init
end

