## 简介

[landingPage](http://gitlab.ipinyou.com/creative_template/landingpage) 可以快速开发品友落地页，它基于 [vue](https://github.com/vuejs/vue) 和 [element-ui](https://github.com/ElemeFE/element) 实现。可配合 [swiper](https://www.swiper.com.cn/) 可以在 PC 和移动端进行整屏滑动。

- [Demo 预览](http://fm.ipinyou.com/landingpage/demo/index.html)

## 安装

```bash
# 克隆项目
git clone git@gitlab.ipinyou.com:creative_template/landingpage.git

# 进入项目目录
cd landingpage

# 安装依赖
npm install

# 建议不要直接使用 cnpm 安装依赖，会有各种诡异的 bug。可以通过如下操作解决 npm 下载速度慢的问题
npm install --registry=https://registry.npm.taobao.org

# 启动服务
npm run dev
```

浏览器访问 http://localhost:8081

## 开发及发布

```bash
# 以master为模板新建分支
git checkout -b '项目名称'

# 安装依赖进行开发

# 开发完成后构建落地页文件
npm run build

# 完成后查看dist文件的index.html

# 检查无误后通过FileZilla Client上传到CDN
```

> 注意：请勿在 master 进行开发或将分支代码合并到 master

## Browsers support

Modern browsers and Internet Explorer 10+.

| [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/edge/edge_48x48.png" alt="IE / Edge" width="24px" height="24px" />](https://godban.github.io/browsers-support-badges/)</br>IE / Edge | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/firefox/firefox_48x48.png" alt="Firefox" width="24px" height="24px" />](https://godban.github.io/browsers-support-badges/)</br>Firefox | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/chrome/chrome_48x48.png" alt="Chrome" width="24px" height="24px" />](https://godban.github.io/browsers-support-badges/)</br>Chrome | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/safari/safari_48x48.png" alt="Safari" width="24px" height="24px" />](https://godban.github.io/browsers-support-badges/)</br>Safari |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| IE10, IE11, Edge                                                                                                                                                                                                 | last 2 versions                                                                                                                                                                                                    | last 2 versions                                                                                                                                                                                                | last 2 versions                                                                                                                                                                                                |

## License

Copyright (c) 2019 品友互动优弛团队出品
