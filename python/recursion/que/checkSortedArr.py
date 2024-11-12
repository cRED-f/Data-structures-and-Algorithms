def isSorted(arr,i):
  if i == len(arr)-1:
    return True
  elif arr[i] > arr[i+1]:
    return False
  else:
    return isSorted(arr , i+1)

arr = [1,2,3,4,5,10]

print(isSorted(arr,0))