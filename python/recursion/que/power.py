# def power(x,n):
#   if n == 1:
#     return x
#   else:
#     return x * power(x,n-1)

# print(power(2,3))

# optimized way

def optimizedPower(x,n):
  if n == 0:
    return 1
  halfPower = optimizedPower(x,n//2)
  halfPowerSq = halfPower * halfPower
  if n % 2 != 0:
    halfPowerSq = x * halfPowerSq
  return halfPowerSq

print(optimizedPower(2,3))

