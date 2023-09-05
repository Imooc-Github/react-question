# 单元测试

对比
- 单元测试 - 某个功能模块、函数、组件的测试 —— 开发人员
- 系统测试 - 整个功能流程的测试 —— 专业测试人员

## jest 入门

jest 是最流行的前端单元测试工具<br>
可参考官网首页的 demo https://www.jestjs.cn/docs/getting-started

react-ts-demo 代码演示
- CRA 直接安装了 jest ，可直接写
- utils/math.ts 和 utils/math.test.ts
- 运行 `npm run test` （看 package.json `scripts`）

测试代码文件的位置
- 统一放在 `__tests__` 目录下
- 和源文件放在一起，增加 `.test.ts` 后缀
- 选择后者（1. 结合更密切，可读性好；2. 不容易忘，敦促及时写单元测试）

小结
- test it 构建测试用例
- expect 断言 —— 很多，后面一一学习
- 测试文件的位置

## 组件单元测试

注意，不是所有前端代码都适合单元测试，一般只对一些核心的、功能封装独立的组件进行单元测试。

- QuestionInfo
- QuestionTitle
- QuestionParagraph
- QuestionInput
- QuestionTextarea
- QuestionRadio
- QuestionCheckbox

## 自动化测试

操作
- `npm run test` 加入到 husky `.husky/pre-commit`
- 为 package.json `scripts` `test` **增加 `--watchAll=false`** —— 重要！否则无法正常执行 commit
- 每次 commit 会执行测试

自动测试的价值
- 每次 commit 都自动执行，测试失败，无法提交代码（不污染现有的代码）
- 避免各种“不小心” “忘了” 的问题 —— 自动化，电脑忘不了
- 要及时完善组件单元测试，新组件也要添加单元测试
