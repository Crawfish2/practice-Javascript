function ClickCounter(){
    let count = 0;
    const game = document.getElementById("game");
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
    game.appendChild(count)
}

ClickCounter();