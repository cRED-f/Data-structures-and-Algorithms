def search(arr, tar, st, ed):
  # base case
  if st > ed:
    return -1
  # recursive case
  mid = st + (ed-st)//2
  # if found
  if arr[mid] == tar:
    return mid
  
  # mid on Line 1
  if arr[st] <= arr[mid]:
    # case 1: left
    if arr[st] <= tar and tar <= arr[mid]:
      return search(arr, tar, st, mid-1)
    else:
    # case 2: right
      return search(arr, tar, mid+1, ed)
  # mid on Line 2
  else:
    # case 3: right
    if arr[mid] <= tar and tar <= arr[ed]:
      return search(arr, tar, mid+1, ed)
    # case 4: left
    else:
      return search(arr, tar, st, mid-1)


arr = [4,5,6,7,0,1,2]
res = search(arr, 0, 0, len(arr)-1)
print(res)
  