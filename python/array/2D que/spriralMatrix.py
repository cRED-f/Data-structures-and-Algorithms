arr = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12],
    [13, 14, 15, 16]
]

def spiralMatrix(arr):
    startCol = 0
    startRow = 0
    endCol = len(arr[0]) - 1
    endRow = len(arr) - 1
    while startRow <= endRow and startCol <= endCol:
        ## Top
        for j in range(startCol, endCol + 1):
            print(arr[startRow][j], end=" ")
        startRow += 1

        ## Right
        for i in range(startRow, endRow + 1):
            print(arr[i][endCol], end=" ")
        endCol -= 1

        ## Bottom
        if startRow <= endRow:
            for j in range(endCol, startCol - 1, -1):
                print(arr[endRow][j], end=" ")
            endRow -= 1

        ## Left
        if startCol <= endCol:
            for i in range(endRow, startRow - 1, -1):
                print(arr[i][startCol], end=" ")
            startCol += 1

spiralMatrix(arr)
