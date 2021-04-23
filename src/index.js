import "./styles.scss";
//テキストボックスの値を入力して、初期化する
const onClickAdd = () => {
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";

  //li生成
  const li = document.createElement("li");
  li.className = "list-row";

  //div生成
  const p = document.createElement("p");
  p.innerText = inputText;

  //未完了リストに追加
  document.getElementById("incomplate-list").appendChild(li);

  //完了ボタン生成
  const complateButton = document.createElement("button");
  complateButton.innerText = "完了";
  complateButton.addEventListener("click", () => {
    //完了リストに追加する要素
    const addTarget = complateButton.parentNode;
    //TODOテキストを取得
    const text = addTarget.firstElementChild.innerText;

    //押された完了ボタンの親タグ(li)を未完了リストから削除
    deleteFromIncomplatelist(complateButton.parentNode);
  });
  //削除ボタン生成
  const deleteButton = document.createElement("button");
  deleteButton.innerText = "削除";
  deleteButton.addEventListener("click", () => {
    //押された削除ボタンの親タグ(li)を未完了リストから削除
    deleteFromIncomplatelist(deleteButton.parentNode);
  });

  //liの子要素に各要素を設定
  li.appendChild(p);
  li.appendChild(complateButton);
  li.appendChild(deleteButton);
};
//未完了リストから指定の要素を削除
const deleteFromIncomplatelist = (target) => {
  document.getElementById("incomplate-list").removeChild(target);
};
document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());
