def max_sub_sum(arr, n)
    return None if arr.length < n

    max_sum = 0
    for i in (0...n)
        max_sum += arr[i]
    end

    temp_sum = max_sum
    for i in (n...arr.length)
        temp_sum = temp_sum - arr[i - n] + arr[i]
        max_sum = [max_sum, temp_sum].max
    end
    return max_sum
end

puts(max_sub_sum([2,6,9,2,1,8,5,6,3], 3))