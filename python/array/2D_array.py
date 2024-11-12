# 2D array
import numpy as np 


tdarr= np.array([[1,2,3],[4,5,6],[7,8,9]])
print(tdarr)

# Accessing 2D array
print("accessing arr",tdarr[0,0])

# Slicing 2D array
print("slicing", tdarr[0:2,0:2])

# Iterating 2D array
for i in range(len(tdarr)):
    for j in range(len(tdarr[i])):
        print(tdarr[i][j],end=" ")
    print()

# Adding 2D array
arr1 = np.array([[1,2,3],[4,5,6],[7,8,9]])
arr2 = np.array([[1,2,3],[4,5,6],[7,8,9]])
print("Adding 2D array",arr1+arr2)

# inserting 2D array
arr3 = np.array([[1,2,3],[7,8,9]])

print("inserting 2D array",np.insert(arr3,1,[10,11,12],axis=0))