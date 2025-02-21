function enzan(nyuryoku) {
    const kakikomi = document.getElementById("kakubasyo");
    let keisan = 0;
    
    switch (nyuryoku){
        case 1:
            kakikomi.textContent = "1";
            keisan = keisan + 1
            break;

        case 10:
            // if (keisan != 0 ) {
                kakikomi.textContent = "+";
                // keisan = keisan + "+";
            //}
            break;

        case 11:
            if (keisan != 0 ) {
                kakikomi.textContent = kakikomi + "-";
                keisan = keisan + "-";
            }
            break;

            case 12:
            if (keisan != 0 ) {
                kakikomi.textContent = kakikomi + "×";
                keisan = keisan + "*";
            }
            break;

            case 13:
            if (keisan != 0 ) {
                kakikomi.textContent = kakikomi + "÷";
                keisan = keisan + "/";
            }
            break;

        case 14:
            eval(keisan);
            kakikomi.textContent = keisan;
            break;

        case 15:
            kakikomi.textContent = "";
            keisan = 0;
            break;

        default:
            kakikomi.textContent = "Eroor";
    }
}