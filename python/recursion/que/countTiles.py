# google , amazon
# given a '2xn' board and tiles of size "2 x 1" ,count the number of ways to tile 
# the given board using the 2 x 1 tiles.(A tile can either be placed horizontally or vertically)

def tiling(n):
  # base case
  if n in [0,1]:
    return 1
  
  # work

  # # vertical choice
  # f1 = tiling(n-1)

  # # horizontal choice
  # f2 = tiling(n-2)

  # # total ways
  # totalWays = f1 + f2

  # return totalWays
  return tiling(n-1) + tiling(n-2)

print(tiling(4))