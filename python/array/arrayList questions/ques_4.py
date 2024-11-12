# how to find maximum product of two integers in the array where all elements are positive

num = [1, 20, 30, 44, 5, 56, 57, 8, 9, 10, 31, 12, 13, 14, 35, 16, 27, 58, 19, 21]


def max_product(nums):
    max_num=max(nums)
    max_product = 0
    for j in range(len(nums) - 1):
        if nums[j] != max_num:
            if nums[j] * max_num > max_product:
                max_product = nums[j] * max_num
                pairs=num[j]  ,  max_num
    print(pairs)
    return max_product

print(max_product(num))


#O(2n)=>O(n)