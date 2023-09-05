# Redux 管理用户信息

## store

创建 src/store/store.ts 和 src/store/userReducer.ts

## 开发

Logo 组件，根据 username 判断链接地址<br>
新建 hooks/useGetUserInfo.ts

hooks/useLoadUserData.ts
- 使用 `loginReducer`
- useSelect - 根据 username 判断是否已经登录
- UserInfo 组件，去掉 service ，改用 useGetUserInfo

UserInfo 组件
- 使用 `logoutReducer`
- useSelect - 显示用户信息或“登录”

新建 `hooks/useNavPage` 执行跳转逻辑，用于 MainLayout QuestionLayout
