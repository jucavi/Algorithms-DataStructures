from turtle import right


def merge(sorted_list1, sorted_list2):
    sorted_list = []
    i = 0
    j = 0

    while (i < len(sorted_list1)) and (j < len(sorted_list2)):
        if sorted_list1[i] < sorted_list2[j]:
            sorted_list.append(sorted_list1[i])
            i += 1
        else:
            sorted_list.append(sorted_list2[j])
            j += 1

    while (i < len(sorted_list1)):
        sorted_list.append(sorted_list1[i])
        i += 1

    while (j < len(sorted_list2)):
        sorted_list.append(sorted_list2[j])
        j += 1

    return sorted_list

def merge_sort(unordered_list):
    if (size := len(unordered_list)) <= 1:
        return unordered_list

    middle = size // 2
    left = merge_sort(unordered_list[:middle])
    right = merge_sort(unordered_list[middle:])

    return merge(left, right)


print(merge_sort([12,6,4,1]))