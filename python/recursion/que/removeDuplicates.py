# google , microsoft 
# remove duplicates using recursion

def removeDup(string, i, newstr, map):
    # Base case
    if i == len(string):
        return newstr
    # Work
    currChar = string[i]

    if map[ord(currChar) - ord('a')]:
        # If current character is already in the map, skip it
        return removeDup(string, i + 1, newstr, map)
    else:
        # Mark the character as seen and add to newstr
        map[ord(currChar) - ord('a')] = True
        newstr += currChar
        return removeDup(string, i + 1, newstr, map)

# Input string
string = 'jjaahid'
# Initialize the boolean list for tracking characters
map = [False] * 26
# Calling the function
result = removeDup(string, 0, "", map)
print(result)
