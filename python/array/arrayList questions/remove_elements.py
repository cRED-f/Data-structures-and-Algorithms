## remove the n elements from the given array

arr = [3,2,2,3]
k = 3
def removeElement(arr, k):
  rem = []
  arr.sort()
  for i in range(len(arr) -1):
    if k != arr[i] :
      rem.append(arr[i])
  print(rem)

removeElement(arr,k)

