arr = []

def backtrack(n):
    if n == 0:
        print(arr)
    else:
        arr.append(n)
        backtrack(n - 1)
        arr.pop()
        backtrack(n - 1)

backtrack(3)