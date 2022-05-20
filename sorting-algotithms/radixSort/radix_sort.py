# from math import log

# def get_digit(num, pos):
#     """
#     pos:       3 2 1 0
#     num: 7652  7 6 5 2
#     return 0 for positions out of range
#     """
#     return (num // pow(10, pos)) % 10


# def digit_count(num):
#     if num == 0: return 1
#     return int((log(num, 10).real // 1) + 1)

# def most_digits(arr):
#     return max(map(digit_count, arr))


# def radix_sort(arr):
#     """
#     Only for positive integers
#     """
#     buckets_len = most_digits(arr)
#     for i in range(buckets_len):
#         buckets = [[] for _ in range(10)]
#         for val in arr:
#             digit = get_digit(val, i)
#             buckets[digit].append(val)
#         tmp = []
#         [tmp.extend(bucket) for bucket in buckets]
#         arr = tmp

#     return arr

def countingSort(array, place):
    size = len(array)
    output = [0] * size
    count = [0] * 10

    # Calculate count of elements
    for i in range(0, size):
        index = array[i] // place
        count[index % 10] += 1

    # Calculate cumulative count
    for i in range(1, 10):
        count[i] += count[i - 1]

    # Place the elements in sorted order
    i = size - 1
    while i >= 0:
        index = array[i] // place
        output[count[index % 10] - 1] = array[i]
        count[index % 10] -= 1
        i -= 1

    for i in range(0, size):
        array[i] = output[i]



def radix_sort(array):
    max_element = max(array)

    place = 1
    while max_element // place > 0:
        countingSort(array, place)
        place *= 10

        

nums = [121, 432, 564, 23, 1, 45, 788]
print(radix_sort(nums))
