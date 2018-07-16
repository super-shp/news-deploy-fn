# 新闻发布网站

小学期课设新闻发布网站

## quick start

需要 node 环境，推荐 yarn 包管理

1.  安装依赖 `yarn install`
2.  启动开发 `yarn serve`

## 项目结构说明

```
api: axios instance creator
assets: some stastic
components: 组件
  |- layout 布局文件
  |- ui 基于buefy
  |- ...
util： 工具函数
pages： 存放页面模块
router： 路由配置
config: 配置文件
  |- vueConfig vue全局配置
  |- commonConfig 通用配置，包括axios domain
```
