function Zyanken(){
    const choices = ["グー","チョキ","パー","ムテキ"];//配列

    let select = document.createElement("select");
    select.id = "choices"
    choices.forEach(choice => {
        let option = document.createElement("option");
        option.value = choice;
        option.textContent = choice; 
        option.id = choice;

        select.appendChild(option);
    });
    game.appendChild(select);

    let nyuryoku = document.createElement("button");
    nyuryoku.textContent = "決定";

    game.appendChild(nyuryoku);

    let image = document.createElement("img");
    image.style.width = "270px";
    image.style.height = "200px";    

    let enimage = document.createElement("img");
    enimage.style.width = "270px";
    enimage.style.height = "200px";   

    let hand = document.getElementById("choices");
    
    let enemy = choices[Math.floor(Math.random() * choices.length)];

    nyuryoku.addEventListener("click",function(){

        switch(hand.value){
            
            case "グー":
                image.src = "https://illustcenter.com/wp-content/uploads/2022/05/rdesign_14296.png";
                break;
            case "チョキ":
                image.src = "https://illustcenter.com/wp-content/uploads/2022/05/rdesign_14297.png";
                break;
            case "パー":
                image.src = "https://illustcenter.com/wp-content/uploads/2022/05/rdesign_14298.png";
                break;
            case "ムテキ":
                image.src = "https://45mix.net/wp-content/uploads/2014/03/c26f6482d11e463f2629f400e85938c1.png";
            default:
                break;
        }
        console.log(enemy.value); 
        switch(enemy){
            case "グー":
                enimage.src = "https://illustcenter.com/wp-content/uploads/2022/05/rdesign_14296.png";
                break;
            case "チョキ":
                enimage.src = "https://illustcenter.com/wp-content/uploads/2022/05/rdesign_14297.png";
                break;
            case "パー":
                enimage.src = "https://illustcenter.com/wp-content/uploads/2022/05/rdesign_14298.png";
                break;
            case "ムテキ":
                enimage.src = "https://45mix.net/wp-content/uploads/2014/03/c26f6482d11e463f2629f400e85938c1.png";
            default:
                break;
        }

        image.alt = "画像読み込みエラー";
        enimage.alt = "画像読み込みエラー";
    })

    game.appendChild(image);
    game.appendChild(enimage);

    //forEach 配列などの複数のデータがあるものに使える。全部やる関数
    //配列.forEach(配列の中身 => {命令})

    // let select = document.createElement("select");
    // let option1 = document.createElement("option");
    // let option2 = document.createElement("option");
    // let option3 = document.createElement("option");

    // const gu = "グー"
    // const choki = "チョキ"
    // const paa = "パー"

    // option1.value = gu;
    // option1.textContent = gu; 
    // select.appendChild(option);

    // option2.value = choki;
    // option2.textContent = choki; 
    // select.appendChild(option);

    // option3.value = paa;
    // option3.textContent = paa; 
    // select.appendChild(option);

}