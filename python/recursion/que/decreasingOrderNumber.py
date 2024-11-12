def recursiveMethod(n):
  if n == 1:
    print(n)
    return
  print(n)
  recursiveMethod(n-1)

recursiveMethod(4)