# paytm
# print all binary strings of size N without consecutive ones

# def printBinStr(str , i , lastPlace):
#   # base case
#   if i == 0:
#     return [str]
#   # recursive case
#   res = []
#   # add '0' and recurse
#   res.extend(printBinStr(str+"0", i-1 , 0))
#   # Add "1" and recurse if last place was not "1"
#   if lastPlace == 0:
#       res.extend(printBinStr(str+"1", i-1 , 1))
#   return res


  
# print(printBinStr("",3,0)) 


# print all binary strings of size N without consecutive zeros
def printBinStr(str , i , lastPlace):
  # base case
  if i == 0:
    return [str]
  # recursive case
  res = []
  # add '1' and recurse
  res.extend(printBinStr(str+"1", i-1 , 1))
  # Add "0" and recurse if last place was not "0"
  if lastPlace == 1:
      res.extend(printBinStr(str+"0", i-1 , 0))
  return res


  
print(printBinStr("",3,0)) 