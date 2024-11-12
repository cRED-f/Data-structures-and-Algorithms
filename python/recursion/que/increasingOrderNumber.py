def recursiveMethod(n):
  if n == 1:
    print(n)
    return
  recursiveMethod(n-1)
  print(n)

recursiveMethod(4)