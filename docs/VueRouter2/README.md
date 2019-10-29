# vue-router とは
Vue.js でシングルページアプリケーションを実現するための拡張ライブラリです。

## インストール
直接ダウンロードして利用する方法を記載します。  
https://router.vuejs.org/ja/installation.html
```sh
# 最新のバージョンをインストールする方法
npm install vue-router

# 本書で利用するバージョンをインストールする方法
npm install vue-router@3.0.6
```

インストールができたら、`/src/route.js` を作成することで準備完了です。

### /src/route.js
```js
import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)
```