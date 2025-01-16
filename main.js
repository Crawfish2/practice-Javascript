function Clicker(){
    let count = 0;
    const game = document.getElementById("game");
    //+1ボタンの定義
    let button1 = document.createElement("button");
    button1.textContent = "+1ボタン";
    //+10ボタンの定義
    let button2 = document.createElement("button");
    button2.textContent = "+10ボタン";
    //リセットボタンの定義
    let button3 = document.createElement("button");
    button3.textContent = "リセットボタン";
    //カウンタの定義
    let counter = document.createElement("p");
    counter.textContent = count;
    //+1ボタンの処理
    button1.addEventListener("click",function(){
        count++;
        counter.textContent = count;
        })
    //+10ボタンの処理
    button2.addEventListener("click",function(){
        count=count+10;
        counter.textContent = count;
        })
    //リセットボタンの処理
    button3.addEventListener("click",function(){
        count=0;
        counter.textContent = count;
        })

    counter.addEventListener("click",function(){
        count=0;
        counter.textContent = count;
        })
    
    //ボタンの表示    
    game.appendChild(button1);
    game.appendChild(button2);
    game.appendChild(button3);
    //カウンタの表示
    game.appendChild(counter);
}
Clicker();