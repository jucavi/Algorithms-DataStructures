def merge(arr1, arr2)
    result = []
    i = 0
    j = 0

    while (i < arr1.size and j < arr2.size)
        if arr1[i] < arr2[j]
            result.push(arr1[i])
            i+=1
        else
            result.push(arr2[j])
            j+=1
        end
    end

    while i < arr1.size
        result.push(arr1[i])
        i+=1
    end

    while j < arr2.size
        result.push(arr1[j])
        j+=1
    end
    return result
end

def merge_sort(arr)
    len = arr.size
    return arr if len <= 1

    middle = len / 2
    left = merge_sort(arr.slice(0, middle))
    right = merge_sort(arr.slice(middle, len))

    return merge(left, right)
end

print(merge_sort([12,6,4,1]))
