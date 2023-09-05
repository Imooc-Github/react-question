# 答卷数据

## 数据结构设计

回顾：问卷 vs 答卷

（使用演示的“前端工程师就业调研”例子）

一个问卷发布了，用户提交的一份**答卷**，数据结构如下：

```js
{
    questionId: '63a51dd42ef26594341e2aff',
    answerList: [
        { componentId: 'c1', value: undefined }, // 标题 info
        { componentId: 'c2', value: '张三' }, // input
        { componentId: 'c3', value: '13987650099' }, // input
        { componentId: 'c4', value: '1-3年' }, // 单选
        { componentId: 'c5', value: 'Vue2,Vue3' }, // 多选
        { componentId: 'c6', value: '大于20k' }, // 单选
        { componentId: 'c7', value: '备注xx' } // textarea
    ]
}
```

**一个问卷对应多个答卷**，所以一个问卷的所有答卷列表如下：

```js
[
    // 用户A
    {
        _id: 'xx',
        c2: '张三',
        c3: '13987650099',
        c4: '1-3年', // 单选
        c5: 'Vue2,Vue3', // 多选
        c6: '大于20k',
        c7: '备注xx'
    },
    // 用户B
    {
        _id: 'y',
        c2: '李四',
        c3: 'lisi@163.com',
        c4: '3-5年',
        c5: 'Vue2,React',
        c6: '10-20k',
        c7: '备注yy'
    },
    // 更多用户...
]
```

## 完善 mock

根据上面的分析，可以设置 mock

```js
// url `/api/stat/:questionId`
// method `get`
{
    errno: 0,
    data: {
        total: 100, // 分页
        list: [ /* 上面的答卷列表 */ ]
    }
}
```
