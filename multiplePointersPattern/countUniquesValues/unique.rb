def count_unique_values(ary)
    return ary.length if ary.length < 2

    i = 0
    unique_list = [ary[0]]
    for j in (1...ary.length)
        if unique_list[i] != ary[j]
            unique_list.push(ary[j])
            i += 1
        end
    end
    return i + 1
end


puts(count_unique_values([1, 1, 1, 1, 1, 1, 2])) # 2
puts(count_unique_values([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13])) # 7
puts(count_unique_values([])) # 0
puts(count_unique_values([-2, -1, -1, 0, 1])) # 4
puts(count_unique_values([1])) # 1