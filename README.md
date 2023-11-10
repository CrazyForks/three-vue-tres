<!--
 * @Description: 
 * @Version: 1.668
 * @Autor: 地虎降天龙
 * @Date: 2023-10-16 10:53:09
 * @LastEditors: 地虎降天龙
 * @LastEditTime: 2023-11-09 14:46:42
-->
# 🧊🧊🧊 icegl-three-vue-tres 🧊🧊🧊
## 🎉🎉🎊 三维可视化项目快速落地の开源框架 🎊🎉🎉
## 🧊🧊🧊🧊🧊🧊🧊🧊🧊🧊🧊🧊🧊🧊🧊🧊🧊🧊

# 生态 `@ThreeJS-@Vue3.x-@TresJS`
> icegl出品，永久开源且免费商用，持续更新ing，请点击右上角start⭐关注

本项目融合于三大生态系统中：
- 🎲 ThreeJS * [点击详情](https://threejs.org)

ThreeJS大名鼎鼎的基于浏览器渲染，JavaScript语言的3D库。

- 🍀 Vue3.x * [点击详情](https://cn.vuejs.org)

易学易用，性能出色，适用场景丰富的 Web 前端框架。

- ⚡ TresJS * [点击详情](https://tresjs.org)

使用Vue3.x组件实现声明式的ThreeJS，做属于前端的三维项目。

# 🏕点击预览：[🌏opensource.icegl.cn](http://opensource.icegl.cn)
![展示](./preview/数字城市1.gif)
![展示](./preview/地球2.gif)
![展示](./preview/地球3.gif)
![展示](./preview/热力图.gif)

更多演示请进入预览页面

# 优势
- 🌈 前端の基本素养 * FesJS [点击详情](https://fesjs.mumblefe.cn)

集成封装项目落地的常用库：图标、多语言、API接口调用、Vuex/Pinia、model数据封装、页面layout/权限access、路由管理等。

- 🌠 像写Vue3.x一样写三维可视化项目[点击详情](https://tresjs.org/guide)

全功能版本追溯保持threeJS最新版本 * TresJS 
最新Vue3.x的语法糖写法，TS/JS通吃，让你以最新最爽快的方式构建三维可视化项目

```html
<template>
  <TresCanvas window-size>
    <TresPerspectiveCamera />
    <TresMesh>
      <TresTorusGeometry :args="[1, 0.5, 16, 32]" />
      <TresMeshBasicMaterial color="orange" />
    </TresMesh>
  </TresCanvas>
</template>
<script setup lang="ts">
  import { useRenderLoop, useTexture } from '@tresjs/core'
  //读取材质
  const pTexture = await useTexture(['./**.jpg', './**.png'])
  const { onLoop } = useRenderLoop()
  onLoop(({ delta }) => {
    //循环render
  })
</script>
```
- 🧩 丰富的插件应用市场

插件中心包含各式各样的项目场景和功能。插件是ICE社区生态中重要的一环，在应用市场中完整应用和普通插件统一称为插件。

### 我们将会逐一把落地的项目以插件的形式加入到此开源框中...
### 敬请右上角一键三连: 关注💛 点赞⭐ fork👣

# ✅ 快速开始
```
1、git clone 或者 直接下载 本项目

2、cd 到项目根目录

3、yarn	//安装依赖

4、yarn dev	//调试模式

5、yarn build	//编译打包
```

# 📖 文档
项目文档正在紧张的编写中...敬请期待!

# ❓ 问题反馈
在使用中有任何问题，请使用以下联系方式联系我们

- 问答社区: [图形学社区icegl.cn](https://www.icegl.cn/ask)
<p align = "left">   
<img src="https://icegl-1314935952.cos.ap-beijing.myqcloud.com/uploads/20230421/QQ20230421-121209.png" width="680" />
</p>

- 欢迎大家也加入微信群，已有几个群已满，一起学习讨论webgl。加微信我拉进群
<p align = "left">    
<img src="https://icegl-1314935952.cos.ap-beijing.myqcloud.com/uploads/20230731/17d59bab46815cce1f4f1e09dcbb6ccc.png" width="300" />
</p>

# ™️ 版权信息

本项目遵循Apache2开源协议发布，并提供永久免费使用以及商用。

本项目包含的第三方源码和二进制文件之版权信息另行标注。

版权所有Copyright © 2022-2025 by 🧊icegl (https://www.icegl.cn)

All rights reserved。