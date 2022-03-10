def same(arr1, arr2)
    return false if arr1.length != arr2.length

    frecuency_counter1 = {}
    frecuency_counter2 = {}

    arr1.each { |elm| frecuency_counter1[elm] = (frecuency_counter1[elm] || 0) + 1 }
    arr2.each { |elm| frecuency_counter2[elm] = (frecuency_counter2[elm] || 0) + 1 }

    frecuency_counter1.each  do |elm, counter|
        return false if !frecuency_counter2.include?(elm ** 2)
        return false if frecuency_counter2[elm ** 2] != counter
    end

    return true
end

puts(same([1, 2, 3, 4], [1, 3, 9, 1])) # false