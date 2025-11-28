// Dom描画に使うデータは全件リストに固定
import { todoList } from "./todoStore.js";

//描画エリアの親divを取得
const content = document.querySelector(".content");

// 各ボタンを取得
export const Btns = {
	addBtn: document.querySelector("#add"),
	editBtn: document.querySelector(".editbtn"),
	deleteBtn: document.querySelector(".deletebtn"),
	// 以下モーダル
	closeBtn: document.querySelector(".close-modal"),
	saveBtn: document.querySelector(".save")

};

// todoListを表示
export function displayList() {
	for (let i = 0; i < todoList.length; i++) {
		// 親コンテナ作成
		const container = document.createElement("div");
		container.setAttribute("class", "container");
		container.setAttribute("id", todoList[i].todoId);
		// コンテナ内部の作成
		container.innerHTML = `
				<div class="todo">
					<input type="checkbox">
					<p class="title">${todoList[i].title}</p>
					<p class="dueate">${todoList[i].dueDate}</p>
				</div>
				<div class="utilities">
					<button class="editbtn">Edit</button>
					<button class="deletebtn">Trash</button>
				</div>
			`;
		content.appendChild(container);
	}
	const addBtnBelowList = document.createElement("button");
	addBtnBelowList.setAttribute("class", "addbelowlist");
	addBtnBelowList.textContent = "Add Task";
	content.appendChild(addBtnBelowList);
}

export function clearList() {
	content.innerHTML = "";
}

// 編集ボタンクリックでモーダルウィンドウを表示
export function openEditor(id) {
	const dialog = document.querySelector("dialog")
	const title = document.querySelector(".title-input")
	const dueDate = document.querySelector("input[type=date]")
	const targetId = todoList.findIndex((el)=> el.todoId === id);
	
	title.value = todoList[targetId].title;
	dueDate.setAttribute("value", `${todoList[targetId].dueDate}`)
	dialog.showModal();
}

// モーダルを閉じる
export function closeEditor() {
	const dialog = document.querySelector("dialog");
	dialog.close();
}