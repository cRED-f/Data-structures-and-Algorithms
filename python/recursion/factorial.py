def fac(n):
  if n<0:
    return 'n is less than 0'
  elif n in [0,1]:
    return 1
  else:
    return n* fac(n-1)


print(fac(-5)) # 120