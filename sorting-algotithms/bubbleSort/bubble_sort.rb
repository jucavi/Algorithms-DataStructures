def bubble_sort(arr)
    for i in (arr.size - 1).downto(0) do
        no_swaps = true
        i.times do |j|
            if arr[j] > arr[j+1]
                arr[j], arr[j+1] = arr[j+1], arr[j]
                no_swaps = false
            end
        end
        break if no_swaps
    end
    return arr
end



puts bubble_sort([1,2,5,32,9,6,3])