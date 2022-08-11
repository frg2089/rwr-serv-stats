# RWR 服务器状态查询

![license](https://badgen.net/github/license/frg2089/rwr-serv-stats)|![latest release](https://badgen.net/github/release/frg2089/rwr-serv-stats)|![commits count](https://badgen.net/github/commits/frg2089/rwr-serv-stats)|![last commit](https://badgen.net/github/last-commit/frg2089/rwr-serv-stats)
|-|-|-|-|

## 配置环境变量

所有需要配置的文件都在 `public` 目录下, 把文件名的 `.template` 去掉即可正常启动空项目

- servers.json: 该文件提供服务器信息, 它的结构如下:
```json
{
  "group": {
    "name": "ip:port"
  }
}
```
  + ip: 服务器IP
  + port: 服务器端口
  + group: 分组名, 任意填写, 不同分组会以分割线隔开
  + name: 服务器名, 任意填写
- header.html: 该文件名为提供顶部的消息提示

## 开发

该项目依赖 [Nodejs](https://nodejs.org/en/) 进行开发

首先安装依赖包, 该项目采用 `yarn 2` 进行包管理

安装 `yarn` 命令:

```sh
npm i -g yarn@2 # 或 yarn
```

安装依赖包:

```sh
yarn install
```

启动开发环境

```sh
yarn dev
```

启动后会在终端输出本地端口, 使用浏览器访问即可

## 构建

该项目依赖 [Nodejs](https://nodejs.org/en/) 进行打包操作

首先安装依赖包, 该项目采用 `yarn 2` 进行包管理

安装 `yarn` 命令:

```sh
npm i -g yarn@2 # 或 yarn
```

安装依赖包:

```sh
yarn install
```

构建

```sh
yarn build
```

执行后会在 `dist` 目录下生成打包后代码


## 同类型项目

- [Kreedzt/rwr-server-stats](https://github.com/Kreedzt/rwr-server-stats)

## 协议

- [MIT License](https://opensource.org/licenses/MIT)

---
*这个ReadMe是从项目[Kreedzt/rwr-server-stats](https://github.com/Kreedzt/rwr-server-stats)中Copy过来的 **它本身是在GPLv3许可下开源的***
