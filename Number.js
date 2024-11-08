function Number(){
    const random = Math.floor(Math.random()*100)+1;
    //const random = 50;
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