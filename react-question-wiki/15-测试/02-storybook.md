# storybook

组件**可视化**测试<br>
或者，它可以被理解为一种文档或组件使用介绍，通过 storybook 就可以看到组件的 UI 结构、属性配置等。

## 初始化

https://storybook.js.org/docs/react/get-started/install

进入 react 目录，运行 `npx storybook init` ，添加 storybook<br>
PS：期间会咨询是否使用 eslint 插件，选择否。因为我们已经自己定义好 eslint 规则了

先执行 `npm run format` 和 `npm run lint` 统一代码格式（storybook 新增的组件，代码风格可能不一样）

执行 `npm run storybook` 启动，可以看到现成的 demo

最后，新建 `stories/examples` 文件夹，把示例都拖进来。否则太多太乱。

## 代码演示

新建 `stories/question` 目录，在这里新建组件

- QuestionInfo.stories.tsx
- QuestionTitle.stories.tsx
- QuestionParagraph.stories.tsx
- QuestionInput.stories.tsx
