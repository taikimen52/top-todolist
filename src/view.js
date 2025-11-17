// Dom描画に使うデータは全件リストに固定
import { todoList } from "./todoStore.js";

//描画エリアの親divを取得
const content = document.querySelector("#content");

// 各ボタンを取得
const addBtn = document.querySelector("#add");
const editBtn = document.querySelector(".editbtn");
const deleteBtn = document.querySelector(".deletebtn");

// todoListを表示
function displayList() {
	for(let i =0; i < todoList; i++){
		// 親コンテナ作成
		const container = document.createElement("div");
		container.setAttribute(".container");
		container.setAttribute(`#${todoList[i].todoId}`)
		// コンテナ内部の作成
		container.innerHTML = 
			`
				<div class="todo">
					<input type="checkbox">
					<p class="title">${todoList[i].title}</p>
					<p class="dueate">${todoList[i].dueDate}</p>
				</div>
				<div class="utilities">
					<button class="editbtn">Edit</button>
					<button class="deletebtn"><img src="/src/imgs/trash.png" alt="trash"></button>
				</div>
			`
	}
}


