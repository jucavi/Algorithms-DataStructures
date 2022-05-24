def pivotHelper(arr, start_idx, end_index)
    pivot = arr[start_idx]
    idx = start_idx

    (start_idx...end_index).each do |i|
        if arr[i] < pivot
            idx += 1
            arr[i], arr[idx] = arr[idx], arr[i]
        end
    end
    arr[start_idx], arr[idx] = arr[idx], arr[start_idx]
    return idx
end

def quick_sort(arr, left, right)
    if left < right
        idx = pivotHelper(arr, left, right)
        quick_sort(arr, left, idx)
        quick_sort(arr, idx + 1, right)
    end
    return arr
end


arr = [5,7,4,1,6,8,7,9,2,3,7]
print quick_sort(arr, 0, arr.size)
