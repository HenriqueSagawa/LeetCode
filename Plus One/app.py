case1 = [1,2,3]
case2 = [4,3,2,1]
case3 = [9]

def plusone(list):
    for i in range(len(list)):
        list[i] = str(list[i])

    num = ""

    for i in list:
        num += i

    num = int(num)

    num = num + 1
    
    nums = []

    num = str(num)

    for i in range(len(num)):
        nums.append(num[i])
    
    return nums

print(f"Caso 1: {plusone(case1)}")
print(f"Caso 2: {plusone(case2)}")
print(f"Caso 3: {plusone(case3)}")