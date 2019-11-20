# Vuepress をダークテーマを適用する。

## vuepress-theme-dark や vuepress-theme-dark-new を適用してもダメだった。
ググると、`vuepress-theme-dark` や `vuepress-theme-dark-new` がまずヒットする。

しかし、これをドキュメント通りに適用しても、エラーになる。

```json
// package.json
{
  "devDependencies": {
    "vuepress": "^1.2.0",
    "vuepress-theme-dark": "^0.1.0",
    // or 
    "vuepress-theme-dark-new": "^0.1.2"
  }
}
```

```sh
$ npm run docs:dev

> @ docs:dev /Users/xxx/Code/note
> vuepress dev docs

wait Extracting site metadata...
Error: Cannot resolve theme: dark.
    at resolveTheme (/Users/xxx/Code/note/node_modules/@vuepress/core/lib/node/loadTheme.js:111:13)
    at loadTheme (/Users/xxx/Code/note/node_modules/@vuepress/core/lib/node/loadTheme.js:36:17)
    at App.process (/Users/xxx/Code/note/node_modules/@vuepress/core/lib/node/App.js:100:21)
    at process._tickCallback (internal/process/next_tick.js:68:7)
npm ERR! code ELIFECYCLE
npm ERR! errno 1
npm ERR! @ docs:dev: `vuepress dev docs`
npm ERR! Exit status 1
```

いずれもテーマが解決できない。

## awesome-vuepress
他にいいテーマはないか調べていたら、[awesome-vuepress
](https://github.com/vuepressjs/awesome-vuepress) を見つけた。

その中で、`dark` と説明に書いてあるのは以下の3つ。
- vuepress-theme-thindark
- vuepress-theme-default-prefers-color-scheme
- vuepress-theme-yuu

`thinDark` はナビバー部がダークなだけっぽいので、求めているものとは違い。
`default-prefers-color-scheme` はダークテーマだが何となくフォントカラーが明るくコントラストが強すぎる気がした。

`vuepress-theme-yuu` は、最初はデフォルトカラーだが、ダークモードに変更ができさらにはフォントのカラーも画面上で変更できる。