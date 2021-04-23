import "./styles.scss";
// テキストボックスの値を入力して、初期化する
const onClickAdd = () => {
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";
  createIncomplateList(inputText);
};

// 未完了リストから指定の要素を削除
const deleteFromIncomplatelist = (target) => {
  document.getElementById("incomplate-list").removeChild(target);
};

// 未完了リストに追加する関数
const createIncomplateList = (text) => {
  // li生成
  const li = document.createElement("li");
  li.className = "list-row";

  // div生成
  const p = document.createElement("p");
  p.innerText = text;

  // 未完了リストに追加
  document.getElementById("incomplate-list").appendChild(li);

  // 完了ボタン生成
  const complateButton = document.createElement("button");
  complateButton.innerText = "完了";
  complateButton.addEventListener("click", () => {
    // 押された完了ボタンの親タグ(li)を未完了リストから削除
    deleteFromIncomplatelist(complateButton.parentNode);

    // 完了リストに追加する要素
    const addTarget = complateButton.parentNode;

    // TODOテキストを取得
    const text = addTarget.firstElementChild.innerText;

    // li以下を初期化
    addTarget.textContent = null;

    // pタグ生成
    const p = document.createElement("p");
    p.innerText = text;

    // 戻るボタン作成
    const backButton = document.createElement("button");
    backButton.innerText = "戻す";
    backButton.addEventListener("click", () => {
      // 押された削除ボタンの親タグ(li)を削除
      const deleteTarget = backButton.parentNode;
      document.getElementById("complate-list").removeChild(deleteTarget);
      // テキストを取得
      const text = deleteTarget.firstElementChild.innerText;
      createIncomplateList(text);
    });

    // liタグの子要素に各要素を設定
    li.appendChild(p);
    li.appendChild(backButton);

    // 完了リストに追加
    document.getElementById("complate-list").appendChild(addTarget);
  });
  // 削除ボタン生成
  const deleteButton = document.createElement("button");
  deleteButton.innerText = "削除";
  deleteButton.addEventListener("click", () => {
    // 押された削除ボタンの親タグ(li)を未完了リストから削除
    deleteFromIncomplatelist(deleteButton.parentNode);
  });

  // liの子要素に各要素を設定
  li.appendChild(p);
  li.appendChild(complateButton);
  li.appendChild(deleteButton);
};

document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());
