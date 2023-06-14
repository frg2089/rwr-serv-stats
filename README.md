# RWR 服务器状态面板

![license](https://badgen.net/github/license/frg2089/rwr-serv-stats)|![latest release](https://badgen.net/github/release/frg2089/rwr-serv-stats)|![commits count](https://badgen.net/github/commits/frg2089/rwr-serv-stats)|![last commit](https://badgen.net/github/last-commit/frg2089/rwr-serv-stats)
|-|-|-|-|

## 预览

|基本版|高级版|
|:-:|:-:|
|![basic](.github\preview\basic.jpeg)|![advance](.github\preview\advance.jpeg)|

## 获取方式

1. 您可以直接在[release](https://github.com/frg2089/rwr-serv-stats/releases/latest)下载预编译的程序。

2. 您也可以直接克隆本仓库自行编译程序。

## 使用说明
这个程序是一个非常简单的单页应用，您可以将它托管到任意的静态托管网站上。


### 服务器列表
在使用时，您需要先配置获取服务器列表的地址。

服务器列表是一个以JSON字符串形式保存的数据，它可以是一个静态文件，也可以是一个由后端服务器返回的JSON字符串数据。

这个JSON的Schema如下所示：

```typescript
type Root = Record<string, ServerGroup>
type ServerGroup = Record<string, Server>
type Server = string
```

它看起来是这样的：

```json
{
   "服务器组1 显示的名称": {
      "服务器1-1 显示的名称": "IPv4地址:端口号",
      "服务器1-2 显示的名称": "IPv4地址:端口号",
      "服务器1-3 显示的名称": "IPv4地址:端口号",
      "服务器1-4 显示的名称": "IPv4地址:端口号"
   },
   "服务器组2 显示的名称": {
      "服务器2-1 显示的名称": "IPv4地址:端口号",
      "服务器2-2 显示的名称": "IPv4地址:端口号",
      "服务器2-3 显示的名称": "IPv4地址:端口号",
      "服务器2-4 显示的名称": "IPv4地址:端口号"
   }
}
```

### 公告模板

公告模板的内容将会展示在页面的首部位置。

您可以在此处输入任何HTML内容。

需要注意的是：在程序中使用了`v-html`来直接展示内容，这意味着可能存在XSS注入。**请确保您的公告模板是您的终端用户无法自行修改的！**

## 自行编译

项目使用`yarn berry`作为项目管理器，我们建议您同样使用`yarn berry`。

[安装 Yarn Berry](https://yarnpkg.org/getting-started/install)

### 可配置项
您可以在`.env.production`文件中配置以下内容
```ini
# 服务器列表获取地址
RWR_SERVER_LIST = '/serverlist.json'
# 状态面板公告获取地址
RWR_NOTICE_URI = '/header.html'
# （可选）反向代理到 http://rwr.runningwithrifles.com/rwr_server_list/get_server_list.php 的地址
# 留空则不使用来自此处的数据
RWR_ADVANCED_INFO_URI = '/api/rwr_server_list/get_server_list.php'
# （可选）默认即可。传递到 RWR_ADVANCED_INFO_URI 的 Query 参数
RWR_ADVANCED_INFO_PARAMS_START = 0
# （可选）默认即可。传递到 RWR_ADVANCED_INFO_URI 的 Query 参数
RWR_ADVANCED_INFO_PARAMS_SIZE = 100
# （可选）默认即可。传递到 RWR_ADVANCED_INFO_URI 的 Query 参数
RWR_ADVANCED_INFO_PARAMS_NAMES = 1
```

## 同类项目

- [Kreedzt/rwr-server-stats](https://github.com/Kreedzt/rwr-server-stats)
  这是一个很棒的项目，它是使用 React 开发的。如果本项目不合您的口味，您可以尝试使用这个项目。

## 许可证

您可以在MIT许可证的许可下自由修改和分发本软件

- [MIT License](https://frg2089.mit-license.org)

