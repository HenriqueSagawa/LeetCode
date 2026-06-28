class Solution(object):
    def addBinary(self, a, b):
        """
        :type a: str
        :type b: str
        :rtype: str
        """
        num1 = 0
        num2 = 0

        for i in range(len(a)):
            num1 = num1 + ((2 ** i) * int(a[len(a) - 1 - i]))

        for i in range(len(b)):
            num2 = num2 + ((2 ** i) * int(b[len(b) - 1 - i]))

        print(num1, num2)

        result = num1 + num2

        if result == 0:
            return "0"

        result_binary = ""

        while result > 0:
            rest = result % 2
            result_binary = str(rest) + result_binary
            result = result // 2

        return result_binary