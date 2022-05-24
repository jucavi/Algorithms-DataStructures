def valid_anagram(first_str, second_str)
    return false if first_str.length != second_str.length

    lookup = {}
    first_str.each_char {|char| lookup[char] = (lookup[char] || 0) + 1}

    second_str.each_char do |char|
        return false if !lookup.include?(char)
        return false if lookup[char].zero?
        lookup[char] -= 1
    end
    return true
end

puts(valid_anagram('', '')) # true
puts(valid_anagram('azz', 'zaa')) # false
puts(valid_anagram('anagram', 'nagaram')) # true
puts(valid_anagram('rat', 'car')) # false
puts(valid_anagram('awesome', 'awesom')) # false
puts(valid_anagram('qwerty', 'qeywrt'))# true
puts(valid_anagram('texttwisttime', 'timetwisttext')) # true