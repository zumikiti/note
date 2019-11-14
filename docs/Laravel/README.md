# Laravel のメモ帳

## duplicates が BadMethodCallException とエラーになる
コレクションに重複がないことを確認しようと以下のようなコードをテストで書いた。
```php
$collection
    ->duplicates(function ($item) {
        return $item['item_1'].$item['item_2'];
    })
    ->count();
```

しかし、`BadMethodCallException: Method Illuminate\Support\Collection::duplicates does not exist.` と結果が返ってきた。

### Laravel のバージョンを確認してみる
```sh
$ homestead ssh
$ php artisan -V
Laravel Framework 5.8.4
```

`5.8` で間違いはない。

### composer update
調べてみたら、`composer update` することで解決するみたい。
ソース元：https://stackoverflow.com/questions/56135579/using-duplicates-method-in-laravel-collections

```sh
$ composer update
Loading composer repositories with package information
Updating dependencies (including require-dev)
Package operations: 8 installs, 90 updates, 1 removal
  - Removing symfony/contracts (v1.0.2)
  ...
  - Updating laravel/framework (v5.8.4 => v5.8.35): Downloading (100%)
  ...

# もう一度バージョン確認
$ php artisan -V
Laravel Framework 5.8.35
```

もう一度テストを実行してみると、エラーなく動いた！