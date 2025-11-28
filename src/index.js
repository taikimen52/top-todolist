// 全操作のハブとなるコントローラーモジュール

// 必要なモジュールをインポート。データは取得せず、操作に必要な関数のみ。
// import "./styles.css"
import { addTodo, deleteTodo, todoList, updateTodo } from "./todoStore.js";
import { Btns, displayList, clearList, openEditor, closeEditor } from "./view.js";
import style from "./styles.css";

// 新規ボタン
Btns.addBtn.addEventListener("click", () => {
    addTodo();
    clearList();
    displayList();
});

// 動的に生成されるTodoリスト内のボタンにイベントリスナーを設置
function addListnerToContent() {
    const content = document.querySelector(".content")
    const dialog = document.querySelector("dialog");

    content.addEventListener("click", (e)=>{
        const id = e.target.parentNode.parentNode.id;
        // Editボタン
        if(e.target && e.target.classList.contains("editbtn")){
            openEditor(id);
        }
        // Deleteボタン
        else if(e.target && e.target.classList.contains("deletebtn")) {
            deleteTodo(id);
            clearList();
            displayList();
        }
        // Add Taskボタン
        else if(e.target && e.target.classList.contains("addbelowlist")) {
            addTodo();
            clearList();
            displayList();
        }
    })
    dialog.addEventListener("click", (e)=>{
        e.preventDefault();
        if(e.target.classList.contains("close-modal")){
            closeEditor();
        }else if(e.target.classList.contains("save")){
            updateTodo();
        }
    })

    
}

addListnerToContent()