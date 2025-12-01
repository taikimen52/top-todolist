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
	const dialog = document.createElement("dialog")
	dialog.setAttribute("class", "modal")

	dialog.innerHTML = `
		<form action="">
			<input type="text" class="title-input">
			<input type="date">
			<button type="submit" class="save">Save</button>
			<button class="close-modal">x</button>
		</form>
	`

	content.appendChild(dialog);

	const title = document.querySelector(".title-input")
	const dueDate = document.querySelector("input[type=date]")
	const targetIndex = todoList.findIndex((el)=> el.todoId === id);

	title.value = todoList[targetIndex].title;
	dueDate.setAttribute("value", `${todoList[targetIndex].dueDate}`)
	dialog.showModal();
}

export function submit(id) {
	const title = document.querySelector(".title-input")
	const dueDate = document.querySelector("input[type=date]")
	return {id: id,
			title: title.value,
			dueDate: dueDate.value
		}
}

// モーダルを閉じる
export function closeEditor() {
	const dialog = document.querySelector("dialog");
	dialog.remove();
}