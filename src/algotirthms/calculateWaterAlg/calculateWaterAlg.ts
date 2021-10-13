export function calculateWaterAlg(data: number[]): {
  totalSum: number
  matrix: number[]
} {
  const matrix: number[] = new Array(data.length).fill(0)
  const isThereBelowZero = data.some((number) => number < 0)
  if (isThereBelowZero) {
    return { totalSum: 0, matrix: [0] }
  }
  let leftMax = 0
  let rightMax = 0
  let left = 0
  let right = data.length - 1
  let volume = 0
  while (left < right) {
    if (data[left] > leftMax) {
      leftMax = data[left]
    }
    if (data[right] > rightMax) {
      rightMax = data[right]
    }
    if (leftMax >= rightMax) {
      volume += rightMax - data[right]
      matrix[right] = Math.max(0, rightMax - data[right])
      right--
    } else {
      volume += leftMax - data[left]
      matrix[left] = Math.max(0, leftMax - data[left])
      left++
    }
  }
  // matrix[left] = Math.max(0, leftMax - data[left])

  // const max = Math.max(...data)
  // const matrix: number[][] = []
  // let totalSum = 0
  // let totalOp = 0
  // for (let i = 0; i < max; i++) {
  //   matrix[i] = []
  //   for (let j = 0; j < data.length; j++) {
  //     if (data[j] === 0) {
  //       matrix[i][j] = 0
  //       continue
  //     }
  //     if (data[j] - 1 >= i) {
  //       matrix[i][j] = 1
  //     } else {
  //       matrix[i][j] = 0
  //     }
  //     totalOp++
  //   }
  //   let beforeWasOne = false
  //   let lastOneIndex = 0
  //   let sum = 0
  //   for (let j = 0; j < data.length; j++) {
  //     const isZero = matrix[i][j] === 0
  //     const isOne = matrix[i][j] === 1
  //     if (isOne) {
  //       beforeWasOne = true
  //       lastOneIndex = j
  //     }
  //     if (beforeWasOne && isZero && j < data.length - 1) {
  //       sum += 1
  //       matrix[i][j] = 2
  //     } else if (isZero && j === data.length - 1) {
  //       sum -= j - lastOneIndex - 1
  //       for (let k = lastOneIndex + 1; k < j; k++) {
  //         matrix[i][k] = 0
  //         totalOp++
  //       }
  //     }
  //   }
  //   totalOp++
  //   totalSum += sum
  // }
  // matrix.reverse()

  return { matrix, totalSum: volume }
}
