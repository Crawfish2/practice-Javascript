function Zyanken(){
    const choices = ["gu","choki","paa","muteki"];//配列

    let select = document.createElement("select");
    choices.forEach(choice => {
        let option = document.createElement("option");
        option.value = choice;
        option.textContent = choice; 
        select.appendChild(option);
    });
    game.appendChild(select);

    let image = document.createElement("img")
    image.alt = "画像読み込みエラー"
    image.style.width = "270px";
    image.style.height = "200px";
    image.src = "https://illustcenter.com/wp-content/uploads/2022/05/rdesign_14296.png"

    game.appendChild(image);


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