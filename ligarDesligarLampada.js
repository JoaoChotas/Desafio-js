function switchONOFF() {
    
    let Lampada = document.getElementById("Lampada");
    if(Lampada.src.match("OFFLampada.jpg")){
        Lampada.src = "ONLampada.jpg"
    }
    else
        Lampada.src = "OFFLampada.jpg"
}