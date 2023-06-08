function OnButtonClick() {
    let text = document.getElementById("text") as HTMLInputElement

    if(text == null) {
        console.log("HTMLを取得できませんでした。")
        return;
    }
    if(text.value == "真田幸村") {
        console.log("正解")
        return;
    }

    else {
        console.log("不正解")
        return;
    }
}
