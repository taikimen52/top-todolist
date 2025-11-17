// Todo全件をリストに格納
export const todoList = [];

// 操作関数群
// 追加
function addTodo(obj) {
    todoList.push(obj);
}

// 削除
function deleteTodo(id) {
    const targetIndex = todoList.findIndex((el) => {
        el.todoId === id;
    })
    todoList.splice(targetIndex, 1);
}

// 更新
function updateTodo(id, title, dueDate, isDone) {
    const targetIndex = todoList.findIndex((el) => {
        el.todoId === id;
    }) 
    todoList[targetIndex].title = title;
    todoList[targetIndex].dueDate = dueDate;
    todoList[targetIndex].isDone = isDone;
}

