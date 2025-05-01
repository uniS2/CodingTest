T = int(input())
solution = [num for num in range(1, T + 1) if T % num == 0]

for num in solution:
    print(f"{num}(은)는 {T}의 약수입니다.")