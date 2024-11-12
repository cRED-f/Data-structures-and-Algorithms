# Given n friends, each one can remain single or can be paired up with some other
# friend. Each friend can be paired only once. Find out the total number of ways in
# which friends can remain single or can be paired up.

def pair(i):
  # base case
  if i in [1 , 2]:
    return i
  # work

  # # choices- single or pair
  # # if single
  # f1 = pair(i-1)
  # # if pair with friend
  # f2 = (i-1) * pair(i-2)

  # # total ways of single or paired up
  # totalWays = f1 + f2
  # return totalWays

  return pair(i-1) + (i-1) * pair(i-2)

print(pair(3))

  