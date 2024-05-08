# end time basis sorted activity selection problem

start = [1,3,0,5,8,5]
end = [2,4,6,7,9,9]
ans = []

# maximum activity
maxActivity = 0

# 1st activity
maxActivity = 1
ans.append(0)
lastEnd = end[0]

for i in range(1,len(end)):
    if start[i] >= lastEnd:
        maxActivity += 1
        ans.append(i)
        lastEnd = end[i]

print("maximum activities", maxActivity)
print("selected activities:", ans)

