function enzan(btn) {
    if (btn == "="){
        document.keisanki.kakubasyo.value = eval(document.keisanki.kakubasyo.value);
    }
    else if (btn == "reset"){
        document.keisanki.kakubasyo.value = "";
    }
}