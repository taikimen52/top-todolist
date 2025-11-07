// 全操作のハブとなるコントローラーモジュール

// 必要なモジュールをインポート。データは取得せず、操作に必要な関数のみ。
import "./styles.css"
import { addNewTodo } from "./todo";
import { renderingList } from "./render";

const newTaskBtn = document.querySelector("#newtask");
newTaskBtn.addEventListener("click", addNewTask)

function addNewTask() {
    addNewTodo();
    renderingList();
}