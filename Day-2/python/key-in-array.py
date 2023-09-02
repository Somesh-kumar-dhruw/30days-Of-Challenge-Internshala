# Test cases using for loop

def find_key_index(key, array):
    for i, element in enumerate(array):
        if element == key:
            return i  # Return the index when the key is found
    return f'{key} not found'  # Return a message if the key is not found

# Test cases
k1 = 4
A = [1, 2, 5, 3, 0]
result1 = find_key_index(k1, A)
print(f"Key {k1} found in array A at index: {result1}")

k2 = 33
B = [11, 22, 33, 44]
result2 = find_key_index(k2, B)
print(f"Key {k2} found in array B at index: {result2}")
