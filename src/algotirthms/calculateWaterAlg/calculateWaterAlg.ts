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

  return { matrix, totalSum: volume }
}
