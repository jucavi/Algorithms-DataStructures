def selection_sort(arr):
    for i in range(len(arr)-1):
        lowest = i
        for j in range(i+1, len(arr)):
            if arr[lowest] > arr[j]:
                lowest = j
        if lowest != i:
            arr[lowest], arr[i] = arr[i], arr[lowest]
    return arr


print(selection_sort([3,92,15,32,9,6,3,1]))