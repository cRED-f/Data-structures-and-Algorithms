def merge_sort(arr):
  # base case
    if len(arr) <= 1:
        return arr
    
    # Finding the mid of the array
    mid = len(arr) // 2
    
    # Dividing the array elements into 2 halves
    left_half = merge_sort(arr[:mid])
    right_half = merge_sort(arr[mid:])
    
    # Merging the sorted halves
    return merge(left_half, right_half)

def merge(left, right):
    sorted_array = []
    i = j = 0
    
    # Copy data to temporary arrays L[] and R[]
    while i < len(left) and j < len(right):
        if left[i] < right[j]:
            sorted_array.append(left[i])
            i += 1
        else:
            sorted_array.append(right[j])
            j += 1
    
    # Checking if any element was left
    while i < len(left):
        sorted_array.append(left[i])
        i += 1
    
    while j < len(right):
        sorted_array.append(right[j])
        j += 1
    
    return sorted_array

# Example usage:
arr = [12, 11, 13, 5, 6, 7]
sorted_arr = merge_sort(arr)
print("Sorted array is:", sorted_arr)
