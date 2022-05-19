def selection_sort(arr)
    (arr.size - 1).times do |i|
        lowest = i
        for j in ((i + 1)...arr.size)
            lowest = j if arr[lowest] > arr[j]
        end
        arr[lowest], arr[i] = arr[i], arr[lowest] if lowest != i
    end
    return arr
end
