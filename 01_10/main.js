const GameSelect = document.getElementById('GameSelect')
const game = document.getElementById('game') 

GameSelect.addEventListener("change",function(){
    game.innerHTML="";
    switch(GameSelect.value){
        //swich文でゲームを引き出す。
        case "none":
            game.textContent="NONE"
            break;
        case "game1":
            ClickCounter();
            break;
        case "game2":
            Number();
            break;
        case "game3":
            Zyanken();
            break;
    }
})