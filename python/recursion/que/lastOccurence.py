def fun(arr,i, k):
  if i == len(arr):
    return -1
  isFound= fun(arr,i+1,k)
  if isFound == -1 and arr[i] == k:
    return i
  return isFound

arr  = [8,3,6,9,5,10,2,5,3]
print(fun(arr,0,5))
