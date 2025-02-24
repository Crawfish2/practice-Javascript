function enzan(nyuryoku) {
    const kakikomi = document.getElementById("kakubasyo");
    switch (nyuryoku){
        case 0:
            kakikomi.value += "0";
            break;

        case 1:
            kakikomi.value += "1";
            break;

        case 2:
            kakikomi.value += "2";
            break;

        case 3:
            kakikomi.value += "3";
            break;

        case 4:
            kakikomi.value += "4";
            break;

        case 4:
            kakikomi.value += "4";
            break;

        case 5:
            kakikomi.value += "5";
            break;

        case 6:
            kakikomi.value += "6";
            break;

        case 7:
            kakikomi.value += "7";
            break;

        case 8:
            kakikomi.value += "8";
            break;

        case 9:
            kakikomi.value += "9";
            break;

        case 10://加算
            if(kakikomi.value != ""){
                kakikomi.value += "+";
            }
            break;

        case 11://減算
            if(kakikomi.value != ""){
                kakikomi.value += "-";
            }
            break;

        case 12://乗算
            if(kakikomi.value != ""){
                kakikomi.value += "*";
            }
            break;

        case 13://除算
            if(kakikomi.value != ""){
                kakikomi.value += "/";
            }
            break;

        case 14://イコール
            kakikomi.value = eval(kakikomi.value);
            break;

        case 15://リセット
            kakikomi.value = "";
            break;

        default:
            kakikomi.value = "Error";
    }
}

// function enzan(btn) {
//     if(btn.value == "=") {
//       document.getElementById("kakubasyo").value = eval(document.getElementById("kakubasyo").value);
//     } else if (btn.value == "C") {
//       document.getElementById("kakubasyo").value = "";
//     } else {
//       if (btn.value == "×") {
//         btn.value = "*";
//       } else if (btn.value == "÷") {
//         btn.value = "/";
//       } 
//       document.getElementById("kakubasyo").value += btn.value;
//       document.getElementById("kakubasyo").value = "×";
//       document.getElementById("kakubasyo").value = "÷";
//     }
//   }