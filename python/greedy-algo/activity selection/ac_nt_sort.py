# not sorted activity selection problem

start = [1,3,0,5,8,5]
end =   [9,4,6,7,9,3]
act = []


end.sort()

for i in range(len(end)):
    act.append([i, start[i], end[i]])


maxAct = 0
ans = []

# 1st activity
maxAct = 1
ans.append(act[0][0])
lastEnd = act[0][2]

for i in range(1, len(end)):
    if act[i][1] >= lastEnd:
        maxAct += 1
        ans.append(act[i][0])
        lastEnd = act[i][2]

print("maximum activities:", maxAct)
print("selected activities:", ans)
