def same(arr1, arr2):
    if len(arr1) != len(arr2):
        return False

    frequecy_counter1 = {}
    frequecy_counter2 = {}

    for elm in arr1:
        frequecy_counter1[elm] = frequecy_counter1.get(elm, 0) + 1

    for elm in arr1:
        frequecy_counter2[elm ** 2] = frequecy_counter2.get(elm ** 2, 0) + 1

    for elm, counter in frequecy_counter1.items():
        if elm ** 2 not in frequecy_counter2:
            return False

        if frequecy_counter2.get(elm ** 2) != counter:
            return False

    return True


print(same([1, 2, 3, 4], [1, 4, 9, 16])) # True
