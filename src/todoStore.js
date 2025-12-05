import Todo from "./todo.js";

// Todo全件をリストに格納
export const todoList = [];
export { addTodo, deleteTodo, updateTodo, changeStatus, saveToStorage, lordStorage, clearStorage};

// 操作関数群
// 追加
function addTodo() {
	const newTodo = new Todo();
	todoList.push(newTodo);
}

// 削除
function deleteTodo(id) {
	const targetIndex = todoList.findIndex((el) => el.todoId === id);
	todoList.splice(targetIndex, 1);
}

// 更新
function updateTodo(id, title, dueDate) {
	const targetIndex = todoList.findIndex((el) => el.todoId === id);
	todoList[targetIndex].title = title;
	todoList[targetIndex].dueDate = dueDate;
}

// 完了
function changeStatus(id) {
	const targetIndex = todoList.findIndex((el)=>el.todoId === id);
	let status = todoList[targetIndex].isDone;
	todoList[targetIndex].isDone = !status;
}

// ローカルストレージに保存
function saveToStorage() {
	const listJson = JSON.stringify(todoList);
	localStorage.setItem("myList", listJson);
	console.log(localStorage.getItem("myList"));
}

// ローカルストレージデータの取出し
function lordStorage() {
	if(localStorage.getItem("myList")){
		const listJson = localStorage.getItem("myList");
		todoList = JSON.parse(listJson);
	}
	
	console.log(todoList);
}

function clearStorage() {
	localStorage.clear();
}