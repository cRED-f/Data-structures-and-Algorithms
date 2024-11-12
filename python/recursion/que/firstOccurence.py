def fun(arr,i, k):
  if i == len(arr):
    return -1
  if arr[i] == k:
    return i
  return fun(arr,i+1,k)

arr  = [8,3,6,9,5,10,2,5,3]
print(fun(arr,0,5))
