function Clicker(){
    let count = 0;
    const game = document.getElementById("game");

    let button1 = document.createElement("button");
    button1.textContent = "+1ボタン";

    let counter = document.createElement("p");
    counter.textContent = count;

    button1.addEventListener("click",function(){
        count++;
            counter.textContent = count;
        })

        game.appendChild(button1);
        game.appendChild(counter);
}
Clicker();