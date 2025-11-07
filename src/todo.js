// Todo全件をリストに格納
export const todoList =[];


// 各Todoオブジェクト
class Todo {
    // プライベートプロパティ（内部処理にのみ使用）
    // 各アイテムにユニークidを振っておく
    #todoId = crypto.randomUUID();
    // 追加された日付を取得（新古順並べ替えを想定）
    #addedDate = new Date;

    // UIから書き換えOKなプロパティをコンストラクタでまとめる
    constructor(title = null, desc = null, dueDate = null, status = "backlog", priority =null) {
        this.title = null;
        this.desc = desc;
        this.dueDate = dueDate;
        this.status = status;
        this.priority = priority;
        this.isDone = false;
    }

    // プライベートプロパティ参照のためのgetter
    get todoId(){
        return this.#todoId;
    }

    get addedDate(){
        return this.#addedDate;
    }

    // タイトル変更のための関数
    changeTitle(dom){
        //変更するtodoのidを参照して中身を変更する。
        const id = dom.getAttribute("#id")
        // idを走査
        const i = todoList.findIndex((el) => {
            el.todoId = id;
        })
        // 
        todoList[i].title = dom.innerText;
    
    }
}


// 新規Todo作成のための関数、new taskボタンに設置する。
export function addNewTodo() {
    const newTodo = new Todo;
    todoList.push(newTodo);
}
