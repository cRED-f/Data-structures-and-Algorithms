// You are given the heads of two sorted linked lists list1 and list2.

// Merge the two lists into one sorted list. The list should be made by splicing together the nodes of the first two lists.

// Return the head of the merged linked list.

// Example 2:

// Input: list1 = [], list2 = []
// Output: []
// Example 3:

// Input: list1 = [], list2 = [0]
// Output: [0]

/**
 * Definition for singly-linked list.
 * struct ListNode {
 *     int val;
 *     ListNode *next;
 *     ListNode() : val(0), next(nullptr) {}
 *     ListNode(int x) : val(x), next(nullptr) {}
 *     ListNode(int x, ListNode *next) : val(x), next(next) {}
 * };
 */
class Solution
{
public:
  ListNode *mergeTwoLists(ListNode *list1, ListNode *list2)
  {
    ListNode *NewNode = new ListNode();
    ListNode *t = NewNode;

    while (list1 != nullptr && list2 != nullptr)
    {
      if (list1->val < list2->val)
      {
        t->next = list1;
        list1 = list1->next;
        t = t->next;
      }
      else
      {
        t->next = list2;
        list2 = list2->next;
        t = t->next;
      }
    }
    if (list1 != nullptr)
    {
      t->next = list1;
    }
    else
    {
      t->next = list2;
    }

    return NewNode->next;
  }
};