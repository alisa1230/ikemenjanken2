//このメソッドはコンピュータの出し手を決め画像を出力するメソッドです
function janken() {
    //ぐー
    const rock = 0;
    //ちょき
    const scissors = 1;
    //ぱー
    const paper = 2;
    //0−2までの数字をランランダムに発生
    const computer_Hand = Math.floor(Math.random() * 3);
    //エレメントを取得し代入
    var cmpHandImg = document.getElementById("cmpHandImg");
    //画像を出力
    if (computer_Hand == rock) {
        cmpHandImg.src = "img/グー.png"
        cmpHandImg.value = 0;
    } else {
        if (computer_Hand == scissors) {
            cmpHandImg.src = "img/チョキ.png";
            cmpHandImg.value = 1;
        } else {
            if (computer_Hand == paper) {
                cmpHandImg.src = "img/パー.png";
                cmpHandImg.value = 2;
            }
        }
    }
};