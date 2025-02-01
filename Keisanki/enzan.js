function enzan() {
    if (btn == "="){
        eval(document.getElementById("kakubasyo").value);
    }
    else if (btn == "reset"){
        document.getElementById("kakubasyo").textContent = ""
    }
}