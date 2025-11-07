// Dom描画に使うデータは全件リストに固定
import {todoList} from "./todo.js"

//描画エリアの親divを取得
const content = document.querySelector("#content");


// 仮のデフォルト画面。todo全件をリスト表示する。new taskボタンに設置。
export function renderingList() {
    // 一旦描画クリア
    content.innerHTML = null;

    // todolist全件更新
    for(let i =0; i< todoList.length; i++){
        const container = document.createElement("div");
        container.setAttribute("id", todoList[i].todoId);
        
        // .content内にcontainerを追加
        content.appendChild(container);
    }
}