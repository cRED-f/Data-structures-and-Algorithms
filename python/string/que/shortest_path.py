# given a route containing 4 direction (E,W,N,S)
# find the shortest path to reach the destination?
# "WNEENESENNN"
import math
def getShortesPath(path):
  x , y = 0,0
  for dirc in path:
    # North
    if dirc == 'N' :
      y = y + 1
    # South
    elif dirc == 'S':
      y = y - 1
    # West
    elif dirc == 'W' :
      x = x - 1
    # East
    elif dirc == 'E' :
      x = x + 1
    else :
      break
  result = math.sqrt(x**2+y**2)
  return result

print(getShortesPath('WNEENESENNN'))
  
  



