# 粽按钮

[English](https://github.com/Rushia-cn/Rushia-button/blob/master/README.EN.md) | 
[中文](https://github.com/Rushia-cn/Rushia-button)
## 关于 
Vtuber [润羽露西娅](https://space.bilibili.com/443300418?) 的按钮面板

注意：**这是一个粉丝自发的项目，与本人或Hololive无关**

## 贡献
### 新音频片段
[如何贡献?](https://github.com/Rushia-cn/Rushia-button/blob/master/Contribute.md)

### Bug修复
我们欢迎Pull Request。

## 如果我想要搭建自己的按钮站？
这非常简单！你只需要：

### MetaSource
MetaSource是一个可以被访问的在线json文件，它存储了所有的分类和片段信息。棕按钮的MetaSource是 https://rushia.moe/category 。[Cloudflare Workers](https://workers.dev) 和 [Workers KV](https://www.cloudflare.com/products/workers-kv/)存放了棕按钮所有元内容。当然你可以使用别的文件存储或者自己的服务器，只需要遵守这个格式：

```json
{
    categories: {
        $category_name: {
            "$lang": "$name",
            "$lang": "$name",
            ...
        },
    ...
    },
    clips: {
        $clip_id: {
            name: {
                "$lang": "$name",
                "$lang": "$name",
                ...
            },
            category: "$category_name",
            url: "$clip_url",
            publish_time: "$publish_time"
        },
        ...
    }
}
```

### 音频文件存储
接下来你需要一个地方来存放所有的音频文件。[Backblaze B2](https://www.backblaze.com/b2/cloud-storage.html)存放了棕按钮所有的音频并使用 cf-workers 作为缓存。只要是任何可以被在线访问的音频都可以。

### Clipper(可选)
Clipper是一个用来自动裁剪音频片段的[工具](https://github.com/Rushia-cn/Clipper-Core)。你也可以选择自己手动剪辑。

### 网站本身
你只需要修改 `@/assets/config.json` 即可获得一个完全自定义的按钮站！
`colorPallet` 负责整个网站的颜色。阴影部分可以用 neumorphism.io 来生成RGB值。
`Routes` 负责 `navBar` 上面的链接和按钮。