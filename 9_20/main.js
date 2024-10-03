function changecolor(){
document.getElementById("text").style.color="red";

document.querySelector("h1").style.color="red";
}
//これは、ドキュメントの中の{text}というIDを持ってるタグ(element)のスタイルの色を赤にするという意味。

let count=0;
function increasecount(){
count++;
document.getElementById("counter").innerText = count;
if(count>99)
    count=0;
}
function decreasecount(){
count--;
document.getElementById("counter").innerText = count;
if(count<0)
    count=0;
}



