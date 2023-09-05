# 提交到 git 仓库

PS：git 不会从 0 讲起

## 选择平台

- 工作中，按照公司规定，可能有内网 git 仓库
- 正式的开源项目，需要积累 star ，可以考虑 github （但有时访问不稳定，不同网络环境不一样）
- 个人学习项目，尽量选择国内平台，速度快

我选择 coding.net

## 演示

```sh
git remote add origin xxx
git push -u origin master
```

## husky

git-hook 

安装依赖

```
npm install husky -save-dev
```

参考文档 https://github.com/typicode/husky 增加三个 `pre-commit` 命令

```shell
npm run lint
npm run format
git add .
```

可以故意制造一个错误：定义一个未使用变量（eslint 配置文件 `rules` 增加 `'no-unused-vars': 'error',`）<br>
然后执行 `git commit` 试试

## commit-lint

参考文档 https://github.com/conventional-changelog/commitlint#getting-started 安装设置即可

commit 规则查看 `node_modules/@commitlint/config-conventional` （在 `commitlint.config.js` 中有配置）

尝试 `git commit -m "test"` 会失败，再尝试 `git commit -m "chore: commit lint"` 会成功
