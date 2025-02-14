function enzan() {
    const enzansi = document.getElementsByClassName("enzansi");
    const btn = document.getElementsByClassName("suuzi");
    const kakikomi = document.getElementById("kakubasyo");
    let keisan = 0;
    switch (enzansi){
        case "=":
            eval(keisan);
            kakikomi.textContent = keisan;
            break;

        case "reset":
            kakikomi.textContent = "";
            keisan = 0;
            break;

        case "+":
            if (keisan != 0 ) {
                kakikomi.textContent = kakikomi + "+";
                keisan = keisan + "+";
            }
            break;

        case "-":
            if (keisan != 0 ) {
                kakikomi.textContent = kakikomi + "-";
                keisan = keisan + "-";
            }
            break;
        default:
            kakikomi.textContent = "Eroor";
    }
}