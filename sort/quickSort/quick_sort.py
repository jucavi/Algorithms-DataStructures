def pivotHelper(arr, start, end):
    pivot = arr[start]
    idx = start

    for i in range(start, end):
        if arr[i] < pivot:
            idx += 1
            arr[idx], arr[i] = arr[i], arr[idx]

    arr[idx], arr[start] = arr[start], arr[idx]
    return idx


def quick_sort(arr, left, right):
    if left < right:
        idx = pivotHelper(arr, left, right)
        quick_sort(arr, left, idx)
        quick_sort(arr, idx + 1, right)

    return arr

arr = [1,5,7,4,1,6,8,7,9,2,3,7]
quick_sort(arr, 0, len(arr))
print(arr)