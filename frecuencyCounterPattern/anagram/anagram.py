def valid_anagram(first_str, secon_str):
    if len(first_str) != len(secon_str):
        return False

    lookup = {}
    for char in first_str:
        lookup[char] = lookup.get(char, 0) + 1

    for char in secon_str:
        if not lookup.get(char):
            return False
        lookup[char] -= 1
    return True


print(valid_anagram('', '')) # True
print(valid_anagram('azz', 'zaa')) # False
print(valid_anagram('anagram', 'nagaram')) # True
print(valid_anagram('rat', 'car')) # False
print(valid_anagram('awesome', 'awesom')) # False
print(valid_anagram('qwerty', 'qeywrt'))# True
print(valid_anagram('texttwisttime', 'timetwisttext')) # True