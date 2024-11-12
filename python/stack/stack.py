class Stack:
  def __init__(self):
    self.stack = []
  # isEmpty method
  def isEmpty(self):
    if self.stack == []:
      return True
    else:
      return False
  # push method
  def push(self, value):
    self.stack.append(value)
    return "The element has been successfully inserted"
  # pop method
  def pop(self):
    if self.isEmpty():
      return "The stack is empty"
    else:
      return self.stack.pop()
  # peek method
  def peek(self):
    if self.isEmpty():
      return "The stack is empty"
    else:
      return self.stack[len(self.stack) - 1]
  # delete method
  def delete(self):
    self.stack = None
    return "The stack has been successfully deleted"
  # traverse method
  def traverse(self):
    for element in self.stack:
      print(element)
# Test the stack 
stack = Stack()
stack.push(1)
stack.push(2)
stack.push(3)
stack.push(4)
stack.push(5)
print(stack.peek())
stack.traverse()
print(stack.pop())
stack.traverse()
print(stack.delete())
stack.traverse()
print(stack.isEmpty())
