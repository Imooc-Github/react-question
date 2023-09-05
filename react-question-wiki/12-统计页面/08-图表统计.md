# 图表统计

## 范围

- 只针对：单选 和 多选
- 单选，用饼图 PieChart
- 多选，用条形图 BarChart

## 数据结构设计

根据之前的答卷数据结构分析，每个单选、多选组件，都可以计算出如下结构<br>
（如何计算，在服务端，这里只论证可行性）

```js
// 服务端计算出一个单选或多选组件的统计结果
stat: [
    { name: '选项1', count: 20 },
    { name: '选项2', count: 10 },
    { name: '选项3', count: 30 },
]
```

## 补充 mock 接口

代码演示

## 为组件扩展 StatComponent

每个组件的图表不一样，还可能会有变化，所以交给组件内部去显示图标。<br>
和 PropComponent 的逻辑类似

- 扩展 StatComponent 和 StatPropsType
- 组件配置，扩展 StatComponent

## 显示图表

把组件的 StatComponent 引入到右侧 ChartStat 组件，并传入数据
