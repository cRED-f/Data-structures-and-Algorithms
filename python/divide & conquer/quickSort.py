def quickSort(arr, low, high):
    if low < high:
        # pi is partitioning index, arr[p] is now at the right place
        pi = partition(arr, low, high)

        # Separately sort elements before partition and after partition
        quickSort(arr, low, pi - 1)
        quickSort(arr, pi + 1, high)

def partition(arr, low, high):
    # This function takes the last element as pivot, places the pivot element at its correct position
    # in sorted array, and places all smaller (smaller than pivot) to left of pivot and all greater elements to right of pivot
    pivot = arr[high]
    i = low - 1  # Index of smaller element

    for j in range(low, high):
        # If current element is smaller than or equal to pivot
        if arr[j] <= pivot:
            i = i + 1
            arr[i], arr[j] = arr[j], arr[i]  # Swap

    arr[i + 1], arr[high] = arr[high], arr[i + 1]  # Swap the pivot element with the element at i+1
    return i + 1

# Example usage:
arr = [10, 7, 8, 9, 1, 5]
n = len(arr)
quickSort(arr, 0, n - 1)
print("Sorted array is:", arr)
