from array import *

myarr= array("i",[0,1,2,3,4,5])

myarr.insert(2,4) #insert(index,value)

print("whole array:\n",myarr)

# traversal
for i in myarr:
  print(i)

 # searching number in array
def searching(arr,target):
  for i in arr:
    if i==target:
      print("founded",i)

searching(myarr,5)

# remove arr
# myarr.remove(4)

def remove_arr(arr, target):
    count = arr.count(target)  
    if count == 0:
        print("not found")
    else:
        arr = [x for x in arr if x != target]  
        print("removed:", arr)


    
remove_arr(myarr,4)

