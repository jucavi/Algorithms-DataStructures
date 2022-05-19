def insertion_sort(arr):
    for i in range(1, len(arr)):
        curr_val = arr[i]
        for j in range(i-1, -1, -1):
            if curr_val < arr[j]:
                arr[j+1] = arr[j]
                arr[j] = curr_val
            else:
                break
    return arr

print(insertion_sort([12,6,4,1]))