arr = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12],
    [13, 14, 15, 16]
]




def diagonalSum(Arr):
    sum=0
    for i in range(0,len(arr)):
        sum = sum + arr[i][i]
    for j in range(0,len(arr)):
        sum = sum + arr[j][len(arr)-j-1]
    return sum

print(diagonalSum(arr))