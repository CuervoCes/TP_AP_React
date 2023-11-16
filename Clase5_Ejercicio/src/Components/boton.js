
const FxColor = () => {

    let var_parrafo = document.getElementById("parrafo");
    let BtnColor = document.getElementById("btn-color");
    console.log('funcion de color');
    
    if (var_parrafo.style.color === "black" || var_parrafo.style.color === ''){
        var_parrafo.style.color = "blue";
        BtnColor.style.backgroundColor = "red";
        BtnColor.innerHTML = "Pintar de rojo";
    } else if(var_parrafo.style.color === "blue"){
        var_parrafo.style.color = "red";
        BtnColor.style.backgroundColor = "black";
        BtnColor.innerHTML = "Pintar de negro";
    } else {
        var_parrafo.style.color = "black";
        BtnColor.style.backgroundColor = "blue";
        BtnColor.innerHTML = "Pintar de azul";
    }
    
}

export default FxColor
