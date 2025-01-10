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
    }
})

function ClickCounter(){
    let count = 0;

    let button1 = document.createElement("button");
    button1.textContent="こ↑こ↓";

    let button2 = document.createElement("button");
    button2.textContent="＋１０";

    let button3 = document.createElement("button");
    button3.textContent="＋１００";

    let reset = document.createElement("button");
    reset.textContent="リセット";

    let counter = document.createElement("p");
    counter.textContent = count;

    button1.addEventListener("click",function(){
        count++;
        counter.textContent = count;
    })

    button2.addEventListener("click",function(){
        count=count+10;
        counter.textContent = count;
    })

    button3.addEventListener("click",function(){
        count=count+100;
        counter.textContent = count;
    })

    reset.addEventListener("click",function(){
        count=0;
        counter.textContent = count;
    })

    game.appendChild(button1)
    game.appendChild(button2)
    game.appendChild(button3)
    game.appendChild(reset)
    game.appendChild(counter)
}
function Number(){
    //const random = Math.floor(Math.random()*100)+1;
    const random = 50;
    let message = document.createElement("p");
    let input = document.createElement("input");
    input.type = "number";
    input.max = 100;
    input.min = 0;
    input.placeholder = "数を入力してください(1~100)"
    let button = document.createElement("button");
    button.textContent="入力"
    button.addEventListener("click",function(){
        const nyuuryoku = parseInt(input.value)
        if(random==nyuuryoku){
            message.textContent="大当たり"
        }
        else if(random>nyuuryoku){
            message.textContent="小さい"
        }
        else if(random<nyuuryoku){
            message.textContent="大きい"
        }
    
    })
    game.appendChild(input);
    game.appendChild(button);
    game.appendChild(message);
}
