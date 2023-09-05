import { sum } from './math'

// 测试用例1
test('1+2=3', () => {
  const n = sum(1, 2)
  expect(n).toBe(3) // 断言
})

// 测试用例2
test('10+5=15', () => {
  expect(sum(10, 5)).toBe(15)
})
