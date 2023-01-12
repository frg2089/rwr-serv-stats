# RWR 服务器状态查询

![license](https://badgen.net/github/license/frg2089/rwr-serv-stats)|![latest release](https://badgen.net/github/release/frg2089/rwr-serv-stats)|![commits count](https://badgen.net/github/commits/frg2089/rwr-serv-stats)|![last commit](https://badgen.net/github/last-commit/frg2089/rwr-serv-stats)
|-|-|-|-|

## 使用

您可以直接在release处下载编译后的资源。

您首先需要配置才可以使用这个软件。

### 配置软件

需要注意的是：软件需要的所有JSON文件 **`都不支持注释`**

软件的所有配置都储存在`config.json`文件中。
```jsonc
{
  "uri": {
    // 服务器列表的地址，可以是相对路径或绝对路径
    "servers": "./servers.json",
    // 标题模板的地址，可以是相对路径或绝对路径
    "header": "./header.html",
    // 反向代理 rwr.runningwithrifles.com 的地址
    // 为空则不使用 rwr.runningwithrifles.com
    "api": "/api"
  }
}
```

#### 关于服务器列表
您需要具备一定的JSON语法知识

```jsonc
{
  // 属性名是服务器分组的名字
  "Groun Name": {
    // 属性名是服务器的名字
    // 值是服务器地址 + ':' + 端口号
    // eg: "127.0.0.1:1234"
    "Server Name": "server address:port"
    // 您可以在此处添加若干服务器。
    // 需要注意的是：您需要在除最后一个属性以外的每一个属性后加英文逗号
  }
  // 您可以在此处添加若干服务器分组。
  // 需要注意的是：您需要在除最后一个属性以外的每一个属性后加英文逗号
}
```

#### 关于标题模板
标题模板的内容将会显示在页面的头部

您可以直接在此文件中输入任何HTML内容，**本软件不会验证这些内容！**

### 配置运行环境

一般来说，您只需要修改`docker-compose.yml`文件中的`WEB_HOST`即可。

通常情况下，`caddy`会自动获取`Let's Encrypt`签名证书。
若您有`caddy`维护经验，您可以自行编辑`Caddyfile`文件。
若您有`docker compose`维护经验，您可以自行编辑`docker-compose.yml`文件。

## 参与开发

本项目使用`yarn berry`作为依赖项管理工具

您需要使用`yarn`才可以进行开发
```powershell
npm i -g yarn
```

## 同类型项目

- [Kreedzt/rwr-server-stats](https://github.com/Kreedzt/rwr-server-stats)
受此项目启发，才有的`rwr-serv-stats`。可以说`rwr-serv-stats`的诞生离不开这个项目吧。
虽然这么说，但`rwr-serv-stats`不包含GPL代码。

## 许可证
您可以在MIT许可证的许可下自由修改和分发本软件

- [MIT License](https://opensource.org/licenses/MIT)
