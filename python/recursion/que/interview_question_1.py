## how to find the sum of digits of a positive integer number using recursion?

def positive_num(n):
  if n<0:
    return print("enter positive integer number")
  elif n==0:
    return 0
  else:
    return int(n%10) + positive_num(n/10)

print(positive_num(112))