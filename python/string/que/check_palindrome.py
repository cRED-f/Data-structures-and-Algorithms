# Check if a string is  a palindrome?
# suppose "racecar","noon","madam"

def check_palindrome(str):
  for i in range(len(str)-1):
    if str[i] == str[len(str)-1-i]:
      count = 1
    else :
      count = 0
      break
  
  if count == 1 :
    print('palindrome')
  else:
    print('not palindrome')

check_palindrome("madam")