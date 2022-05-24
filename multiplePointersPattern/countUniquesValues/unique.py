def count_unique_values(l):
    if len(l) < 2:
        return len(l)

    i = 0
    unique_list = [l[0]]
    for j in range(1, len(l)):
        if unique_list[i] != l[j]:
            unique_list.append(l[j])
            i += 1
    return i + 1

print(count_unique_values([1, 1, 1, 1, 1, 1, 2])) # 2
print(count_unique_values([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13])) # 7
print(count_unique_values([])) # 0
print(count_unique_values([-2, -1, -1, 0, 1])) # 4
print(count_unique_values([1])) # 1
