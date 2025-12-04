// 各Todoオブジェクト
export default class Todo {
	// プライベートプロパティ（内部処理にのみ使用）
	// 各アイテムにユニークidを振っておく
	#todoId = `id_${crypto.randomUUID()}`;
	// 追加された日付を取得（新古順並べ替えを想定）
	#addedDate = new Date();

	// UIから書き換えOKなプロパティをコンストラクタでまとめる
	constructor(title="", dueDate="", isDone = false) {
		this.title = title;
		this.dueDate = dueDate;
		this.isDone = isDone;
	}

	// プライベートプロパティ参照のためのgetter
	get todoId() {
		return this.#todoId;
	}

	get addedDate() {
		return this.#addedDate;
	}
}
