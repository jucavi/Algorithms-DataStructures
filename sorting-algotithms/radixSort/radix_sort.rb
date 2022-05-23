def counting_sort(arr, place)
    size = arr.size
    output = Array.new(size, 0)
    count = Array.new(10, 0)

    # Calculate count of elements
    size.times do |i|
        index = arr[i] / place
        count[index % 10] += 1
    end

    # Calculate cumulative count
    10.times {|i| count[i] += count[i - 1]}

    # Place the elements in sorted order
    i = size - 1
    while i >= 0 do
        index = arr[i] / place
        output[count[index % 10] - 1] = arr[i]
        count[index % 10] -= 1
        i -= 1
    end

    size.times {|i| arr[i] = output[i]}
end


def radix_sort(arr)
    max_element = arr.max

    place = 1
    while max_element / place > 0 do
        counting_sort(arr, place)
        place *= 10
    end
end

nums = [121, 432, 564, 23, 1, 45, 788]
radix_sort(nums)
print(nums)