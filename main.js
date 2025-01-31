const select = document.createElement("select");
const game = document.getElementById("game");
const gameSelect =document.getElementById("gameSelect");
select.name = "games";
select.id = "game-select";    
const options = [
    { value: "", text: "Game Select"},
    { value: "clicker", text: "クリッカーゲーム"},
    { value: "number", text: "数当てゲーム"}
];
options.forEach(OptionData => {
    const option = document.createElement("option");
    option.value = option.value;
    option.textContent = OptionData.text;
    select.appendChild(option);
});
gameSelect.appendChild(select);
const gameSelector = document.getElementById("game-select");
    gameSelector.addEventListener("change",function(){
    game.innerHTML = "";
    switch(gameSelector.value){
        case "number":
            NumberGuessGame();
            break;
        case "clicker":
            Clicker();
            break;
        case "":
            break
        default:
            throw new Error(`${gameSelector.value}って？`)
    }
});
function Clicker() {
    let count = 0;
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
        if (count < 100) {
            count++;
        }
        counter.textContent = count;
    })
    //+10ボタンの処理
    button2.addEventListener("click",function(){
        if (count <= 90) {
            count = count + 10;
        }
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
//Clicker();

function NumberGuessGame() {
    const randomNumber = Math.floor(Math.random() * 100) + 1;
    const message = document.createElement("p");
    const judge = document.createElement("p");
    const input = document.createElement("input");
    const Checkbutton = document.createElement("button");

    let count = 0;
    const countDisplay = document.createElement("p");

    input.type = "number";
    input.placeholder = "好きな数字を入力してください。(1~100)";
    Checkbutton.textContent = "入力";
    // message.textContent = randomNumber;
    // game.appendChild(message);

    Checkbutton.addEventListener("click",function(){
        message.textContent = randomNumber;
        const val = parseInt(input.value);
        count++
        countDisplay.textContent = `試行回数: ${count}`;
        if (val > 100){
            console.error("オーバーフロー") 
        }
        else if (val < 0){
            console.error("アンダーフロー") 
        }
        else if (val == randomNumber) {
            judge.textContent="大正解！！";
            game.appendChild(judge);
            game.appendChild(message);
        }
        else if (val <= randomNumber + 5 && val >= randomNumber - 5){
            judge.textContent="惜しい";
            game.appendChild(judge);
            game.appendChild(message);
        }
        else if (val <= randomNumber) {
            judge.textContent="答えは大きいよ";
            game.appendChild(judge);
            game.appendChild(message);
        }
        else if (val >= randomNumber) {
            judge.textContent="答えは小さいよ";
            game.appendChild(judge);
            game.appendChild(message);
        }
        else {
            console.error("入力値不明")
        }
    })


    game.appendChild(input);
    game.appendChild(Checkbutton);
    game.appendChild(countDisplay);

}
//NumberGuessGame();