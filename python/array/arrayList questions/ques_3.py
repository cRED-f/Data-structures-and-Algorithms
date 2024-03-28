# how to check if an array contains a number in python



num = [1,2,3,4,5,6,9,7,14,15,20,100,500,560]

left=0
right=len(num)-1

def search(num,left,right,target):
  if left <= right:
          mid = (left + right) // 2
          if num[mid] == target:
              return mid
          elif target < num[mid]:
              return search(num, left, mid - 1, target)
          else:
              return search(num, mid + 1, right, target)
  return -1


print(search(num,left,right,14))

# O(logn)