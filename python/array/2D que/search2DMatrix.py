class Solution:
    def searchMatrix(self, matrix: List[List[int]], target: int) -> bool:
        t = target
        row = 0
        col = len(matrix[0])-1
        while row <len(matrix) and col >= 0:
            if matrix[row][col] == t:
                return True
            elif t < matrix[row][col]:
                col-=1
            elif t > matrix[row][col]:
                row+=1
        return False
       
        

