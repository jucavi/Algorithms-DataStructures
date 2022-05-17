def insertion_sort(arr)
    (1...arr.size).each do |i|
        curr_val = arr[i]
        (i-1).downto(0) do |j|
            if curr_val < arr[j]
                arr[j+1] = arr[j]
                arr[j] = curr_val
            end
        end
    end
    return arr
end
