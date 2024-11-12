// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// An input string is valid if:

// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.
// Every close bracket has a corresponding open bracket of the same type.

// Example 1:

// Input: s = "()"

// Output: true

// Example 2:

// Input: s = "()[]{}"

// Output: true

// Example 3:

// Input: s = "(]"

// Output: false

// Example 4:

// Input: s = "([])"

// Output: true

class Solution
{
public:
  bool isValid(string s)
  {

    stack<char> stack;
    for (int i = 0; i < s.length(); i++)
    {
      if (i == 0 && (s[i] == ')' || s[i] == '}' || s[i] == ']'))
        return false;
      else if (s[i] == '(' || s[i] == '{' || s[i] == '[')
      {
        stack.push(s[i]);
      }
      else
      {
        if (stack.empty())
          return false;
        char topChar = stack.top();
        if (s[i] == ')' && topChar == '(' || s[i] == '}' && topChar == '{' || s[i] == ']' && topChar == '[')
        {
          stack.pop();
        }
        else
          return false;
      }
    }
    return stack.empty();
  }
};