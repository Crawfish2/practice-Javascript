function error(){
    console.log(document.getElementById("month").value)
    console.log(document.getElementById("day").value)

    const month = document.getElementById("month").value
    const day = document.getElementById("day").value

    console.log("month:",month,"day:",day)
//              文字    変数   文字  変数
}
/*
valueはタグの値を示す
ないとタグだけを見る

javascriptのプログラムとHTMLファイルはタグに付いているIDで紐づく
タグの中にある付加情報のことを属性という
*/