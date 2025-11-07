# top-todolist
The Odin Project Exercise in JS course

設計

- データ管理モジュール(todo.js)
    - Todo全体の配列
    - Todoクラスと新規作成、更新、削除などの機能

- Dom描画モジュール(render.js)
    - データを元にDom描画
    - イベントリスナー類もここに

- コントローラーモジュール(index.js)
    - UIの操作を拾う
    - それを元にデータの状態を変更
    - 変更したデータで描画更新

- DB管理モジュール
    - 今回はlocalstorageを使用
    - DBへの読み書き