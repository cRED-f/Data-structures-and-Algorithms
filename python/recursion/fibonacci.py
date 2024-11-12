def fibonacci(n):
  if n<0:
    return "enter positive input"
  elif n in [0,1]:
      return n
  else:
        return fibonacci(n-1) + fibonacci(n-2)


print(fibonacci(10))