// Dom描画に使うデータは全件リストに固定
import { todoList } from "./todoStore.js";

export { Btns, displayList, clearList, openEditor, submit, closeEditor}

//描画エリアの親divを取得
const content = document.querySelector(".content");

// 各ボタンを取得
const Btns = {
	addBtn: document.querySelector("#add"),
	editBtn: document.querySelector(".editbtn"),
	deleteBtn: document.querySelector(".deletebtn"),
	// 以下モーダル
	closeBtn: document.querySelector(".close-modal"),
	saveBtn: document.querySelector(".save")

};

// todoListを表示
function displayList() {
	for (let el of todoList) {
		// 親コンテナ作成
		const container = document.createElement("div");
		container.setAttribute("class", "container");
		container.setAttribute("id", el.todoId);

		// コンテナ内部のHTML作成
		container.innerHTML = `
				<div class="todo">
					<input type="checkbox" class="checkbox">
					<p class="title">${el.title}</p>
					<p class="duedate">${el.dueDate}</p>
				</div>
				<div class="utilities">
					<button class="editbtn">Edit</button>
					<button class="deletebtn">Trash</button>
				</div>
			`;
		
		// .content内に追加し、完了タスクにcheckをつけておく
		content.appendChild(container);
		if(el.isDone){
			container.querySelector(".checkbox").setAttribute("checked","")
		}
	}

	// Todoリストの下部にもAdd Taskボタンを置く
	const addBtnBelowList = document.createElement("button");
	addBtnBelowList.setAttribute("class", "addbelowlist");
	addBtnBelowList.textContent = "Add Task";
	content.appendChild(addBtnBelowList);
}

// ディスプレイの一旦前リセット、この後再度ディスプレイすることで変更を画面に反映する
function clearList() {
	content.innerHTML = "";
}

// 編集ボタンクリックでモーダルウィンドウを表示
function openEditor(id) {
	const target = document.querySelector(`#${id}`)
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
	
	// .content内にdialogを追加する
	target.appendChild(dialog);

	// dialog内の要素を取得し、todoリストデータの既存値を初期表示する。
	const title = document.querySelector(".title-input")
	const dueDate = document.querySelector("input[type=date]")
	const targetIndex = todoList.findIndex((el)=> el.todoId === id);

	title.value = todoList[targetIndex].title;
	dueDate.setAttribute("value", `${todoList[targetIndex].dueDate}`)

	dialog.showModal();
}

// ユーザーの入力した内容をオブジェクト化する（後でupdateTodo関数に渡すため）
function submit() {
	const id = document.querySelector("dialog").parentNode.id;
	const title = document.querySelector(".title-input")
	const dueDate = document.querySelector("input[type=date]")
	return {id: id,
			title: title.value,
			dueDate: dueDate.value
		}
}

// モーダルを閉じる
function closeEditor() {
	const dialog = document.querySelector("dialog");
	dialog.remove();
}
