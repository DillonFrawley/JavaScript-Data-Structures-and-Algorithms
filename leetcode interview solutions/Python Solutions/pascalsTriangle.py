
#runtime 27ms, beats 95.6%
#Memory 13.9MB, beats 60.53%
class Solution:
    def generate(self, numRows: int) -> List[List[int]]:
        n = numRows + 1
        output = []
        for i in range(1,n):
            x = 1
            newRow = []
            for j in range(1, i+1):
                newRow.append(x)
                x = x * (i-j) // j
            output.append(newRow)
        return output
