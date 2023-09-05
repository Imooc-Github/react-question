# JSX 对比 Vue 模板

列几个 JSX 和 Vue 模板的重大区别
- 判断，Vue 模板用 `v-if` 指令 https://cn.vuejs.org/guide/essentials/conditional.html
- 循环，Vue 模板用 `v-for` 指令 https://cn.vuejs.org/guide/essentials/list.html
- Vue 模板中没有 `{xxx}` 写法，全都是 `"xxx"`

PS：Vue3 也能很友好的支持 JSX —— 从一开始抨击 JSX 到最后接纳

通过对比，可以看出 React 和 Vue 最初设计理念的区别
- React - JS 能实现的都交给 JS ，不重复定义 —— 要求使用者 JS 熟练
- Vue - 自定义很多指令和写法，初学者好理解好记忆，好推广 —— 这么多写法需要记忆、查文档，麻烦

PS：Vue 最初模仿的是 Angular ，Angular 是几个 Java 程序员开发的。他们对 JS 不熟练，才搞了这么多指令，方便自己使用。
