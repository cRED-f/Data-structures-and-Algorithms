// A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.

// Given a string s, return true if it is a palindrome, or false otherwise.

// Example 1:

// Input: s = "A man, a plan, a canal: Panama"
// Output: true
// Explanation: "amanaplanacanalpanama" is a palindrome.
// Example 2:

// Input: s = "race a car"
// Output: false
// Explanation: "raceacar" is not a palindrome.
// Example 3:

// Input: s = " "
// Output: true
// Explanation: s is an empty string "" after removing non-alphanumeric characters.
// Since an empty string reads the same forward and backward, it is a palindrome.

class Solution
{
public:
  bool isPalindrome(string s)
  {
    int start = 0;
    int end = s.length();
    string convertString = "";
    string reverseString = "";
    while (start < end)
    {
      if ((s[start] >= 'A' && s[start] <= 'Z') || (s[start] >= 'a' && s[start] <= 'z') || (s[start] >= '0' && s[start] <= '9'))
      {
        if (s[start] >= 'A' && s[start] <= 'Z')
        {
          convertString += tolower(s[start]);
        }
        else
        {
          convertString += s[start];
        }
      }
      start++;
    }
    for (int i = convertString.length() - 1; i >= 0; i--)
      reverseString += convertString[i];

    if (reverseString != convertString)
      return false;
    return true;
  }
};