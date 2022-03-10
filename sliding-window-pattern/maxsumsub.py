def max_sub_sum(arr, n):
    if len(arr) < n:
        return None

    max_sum = 0
    for i in range(n):
        max_sum += arr[i]

    temp_sum = max_sum
    for i in range(n, len(arr)):
        temp_sum = temp_sum - arr[i - n] + arr[i]
        max_sum = max(max_sum, temp_sum)
    return max_sum

print(max_sub_sum([2,6,9,2,1,8,5,6,3], 3))