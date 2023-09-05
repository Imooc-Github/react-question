# 普通 CSS

## 内联 style

- 和 HTML style 一样，元素的内联样式
- 必须是 JS 对象形式，不可以是字符串
- 样式名称用驼峰式写法，如 `fontSize`

代码演示

## className

- 和 HTML class 一样，设置 CSS 样式名
- 和 JS `class` 重复，所以改名 `className`
- 可用 `clsx` 或 `classnames` 条件判断

代码演示

链接
- https://www.npmjs.com/package/classnames
- https://www.npmjs.com/package/clsx

## 尽量不用内联 style

- 内联 style 代码量多，性能差
- 外链样式（用 className）代码复用，性能好
- 这和 React 无关，在学 HTML CSS 时就知道
