## 开发

```bash
# 克隆项目
git clone https://github.com/PanJiaChen/vue-element-admin.git

# 进入项目目录
cd vue-element-admin

# 安装依赖
npm install

# 建议不要直接使用 cnpm 安装依赖，会有各种诡异的 bug。可以通过如下操作解决 npm 下载速度慢的问题
npm install --registry=https://registry.npm.taobao.org

# 启动服务
npm run dev
```

浏览器访问 http://localhost:9527

> 安装依赖报错的解决方案： 
> 
> 1.首先将`package.json`中的`tui-editor`那一行修改为`"@toast-ui/editor": "^3.1.3",` 
> 
> 2.进入`\src\components\MarkdownEditor\index.vue`文件，将他的所有import删除换成下面四行
> 
> ```js
> import 'codemirror/lib/codemirror.css'
> import '@toast-ui/editor/dist/toastui-editor.css'
> import Editor from '@toast-ui/editor'
> import defaultOptions from './default-options'
> ```
> 3.把该页面（还是第二条中的文件）的`getValue`和`setValue`分别换成`getMarkdown`和`setMarkdown`

## 发布

```bash
# 构建测试环境
npm run build:stage

# 构建生产环境
npm run build:prod
```

## 其它

```bash
# 预览发布环境效果
npm run preview

# 预览发布环境效果 + 静态资源分析
npm run preview -- --report

# 代码格式检查
npm run lint

# 代码格式检查并自动修复
npm run lint -- --fix
```