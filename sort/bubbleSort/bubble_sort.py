def bubble_sort(arr):
    for i in range(len(arr) - 1, -1, -1):
        no_swaps = True
        for j in range(0, i):
            if arr[j] > arr[j+1]:
                arr[j], arr[j+1] = arr[j+1], arr[j]
                no_swaps = False
        if no_swaps: break
    return arr


print(bubble_sort([1,2,5,32,9,6,3]))