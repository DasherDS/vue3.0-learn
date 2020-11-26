### 首先把vue/cli 升级到最新
    `npm i -g @vue/cli`
### 创建项目 
    `vue create vue3.0-test`
***

### vite 创建vue3.0+ts项目

**vite的安装**

`npm i -g create-vite-app`

**yarn的安装**

首先得安装node.js

`npm i -g yarn`

`yarn --version`

## 使用vite创建vue3-js项目和vue3-ts项目

` yarn create vite-app vue3-test-pro` 或者`npm create vite-app vue3-test-pro`

基本上就是秒创建

然后

```powershell
cd vue3-test-pro
npm i (or 'yarn')
npm run dev (or 'yarn dev')
```

此时mian.js的内容

```javascript
import { createApp } from 'vue'
import App from './App.vue'
import './index.css'

createApp(App).mount('#app')

```

**如果想配置typescript就操作这一步**

安装typescript

`yarn add typescript -D` 或者npm 安装

初始化tsconfig.json（执行以下操作会自动出现的）

`npx tsc --init`

将main.js 修改为 main.ts 同时把app.vue和components文件夹中的HelloWord.vue文件的`<script></script>`修改成`<script lang="ts"></script>`。找到根部目录的index.html 把引的script的 main.js 修改成 main.ts `<script type="module" src="/src/main.ts"></script>`

然后在项目的根目录下新建shim.d.ts文件

​		添加以下内容

```typescript
declare module "*.vue" {
  import { Component } from "vue";
  const component: Component;
  export default component;
}
```

**到此typescript配置完毕**



## 配置 vue-router

安装

`yarn add vue-router@4.0.0-beta.7` 或者 npm i

配置

在项目的src目录下面新建router目录，然后添加index.js(或者index.ts)文件

```javascript
import {createRouter, createWebHashHistory} from 'vue-router'

// 在 Vue-router新版本中，需要使用createRouter来创建路由
export default createRouter({
  // 指定路由的模式,此处使用的是hash模式,也可以使用history模式
  history: createWebHashHistory(),
  // 路由地址
  routes: []
})
```

将router引入到main.js(or main.ts)

```javascript
import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import router from './router/index'

const  app = createApp(App)
// 通过use 将 路由插件安装到 app 中
app.use(router)
app.mount('#app')
```

## 配置 vuex

安装

`yarn add vuex@4.0.0-beta.4` 或者 npm i

配置vuex

在项目的根目录新建store目录，并添加index.js(or index.ts)文件

javascript版

```javascript
import { createStore } from 'vuex'

export default createStore({
  state(){
    return {
      userName: "测试",
    };
  },
});
```

typescript版

```typescript
import { createStore } from 'vuex'

interface State {
  userName: string
}

export default createStore({
  state(): State {
    return {
      userName: "测试",
    };
  },
});
```

引入main.js （or main.ts）

```javascript
import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import router from './router/index'
import store from './store/index'

const  app = createApp(App)
app.use(router)
app.use(store)
app.mount('#app')
```

## 启动项目

运行项目

`yarn dev` or `npm run dev`

