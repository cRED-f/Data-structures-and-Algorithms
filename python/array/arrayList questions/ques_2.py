# write a program to find all pair of integers whose sum is equal to a given number?
#we need to print only distinct pairs
#reverse pair acceptable

list1=[1,2,3,2,3,4,5,6]

def pair(list1,target):
  for i in range(len(list1)):
    for j in range(i+1,len(list1)):
      if list1[i] == list1[j]:
        continue
      elif list1[i]+list1[j]==target:
        print("found:",list1[i],list1[j],"index:" , i,j)
    
    
#O(n^2)

pair(list1,target=6)