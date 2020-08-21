# Rushia Button

[English](https://github.com/Rushia-cn/Rushia-button/blob/master/README.EN.md) | 
[中文](https://github.com/Rushia-cn/Rushia-button)
## About 
A button board for vtuber Uruha Rushia.

Notice: **This is a spontaneous project by fans and has no relation with Uruha Rushia or Hololive**

## Contribute

### New Audio Clips
[How to contribute?](https://github.com/Rushia-cn/Rushia-button/blob/master/Contribute.EN.md)

### Bug report and fix
PR is welcomed.

## What if I want to build my own Button Panel?
It's really easy to do so! Just make sure you have these:

### MetaSource
First what you need is a MetaSource which is an online **json** file that contains all category and clips info. For Rushia Button, it's https://rushia.moe/category. I use [Cloudflare Workers](https://workers.dev) and [Workers KV](https://www.cloudflare.com/products/workers-kv/) to host everything. You can use other file/object host or your own server to do so, as long as it follows this format:

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

### Audio File Host
Then you need some place to host all your audio clips. I use [Backblaze B2](https://www.backblaze.com/b2/cloud-storage.html) and cf-workers as cache. You can choose whatever you want as long as it can be accessed with a public url (and that is the `$clip_url` above) 

### Clipper (Optional)
I have made a [tool](https://github.com/Rushia-cn/Clipper-Core) for automatically download, trim and publish audio clips. Check it out!

### The website itself
To make your own button panel, you only need to change `@/assets/config.json`.   
`colorPallet` controls the overall color scheme of the site. For shadows, you can use neumorphism.io to generate the corresponding RGB value.  
`Routes` controls the routes shows on the `navBar`. 

