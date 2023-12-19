import sys

def sum(a, b):
    return a + b

if __name__ == "__main__":
    if len(sys.argv) == 3:
        num1 = int(sys.argv[1])
        num2 = int(sys.argv[2])
        result = sum(num1, num2)
        print(result)