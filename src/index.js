import "./styles.scss";
//テキストボックスの値を入力して、初期化する
const onClickAdd = () => {
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";

  //li生成
  const li = document.createElement("li");
  li.className = "list-row";

  //div生成
  const div = document.createElement("div");
  div.innerText = inputText;

  //未完了リストに追加
  document.getElementById("incomplate-list").appendChild(li);

  //完了ボタン生成
  const complateButton = document.createElement("button");
  complateButton.innerText = "完了";
  complateButton.addEventListener("click", () => {
    alert("完了");
  });
  //削除ボタン生成
  const deleteButton = document.createElement("button");
  deleteButton.innerText = "削除";
  deleteButton.addEventListener("click", () => {
    alert("削除");
  });

  //liの子要素に各要素を設定
  li.appendChild(div);
  div.appendChild(complateButton);
  div.appendChild(deleteButton);
};

document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());
