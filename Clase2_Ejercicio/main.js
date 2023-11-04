var n1 = document.getElementById("n1");
var n2 = document.getElementById("n2");
var resultado = document.getElementById("resultado");
const botones = document.querySelectorAll('.btn');

//SUMA
function sumar(num1, num2){
    if (num1!="" && num2!=""){    
        resultado.value = Number(num1) + Number(num2);
    } else {
        resultado.value = "Ingrese valores válidos";
    }
}

//RESTA
function restar(num1, num2){
    if (num1!="" && num2!=""){    
        resultado.value = Number(num1) - Number(num2);
    } else {
        resultado.value = "Ingrese valores válidos";
    }
}

//MULTIPLICAR
function multiplicar(num1, num2){
    if (num1!="" && num2!=""){    
        resultado.value = Number(num1) * Number(num2);
    } else {
        resultado.value = "Ingrese valores válidos";
    }
}

//DIVIDIR
function dividir(num1, num2){
    if (num1!="" && num2!=""){   
        if (num2!="0"){
            resultado.value = Number(num1) / Number(num2);
        } else {
            resultado.value = "El dividendo no puede ser 0";    
        }
        
    } else {
        resultado.value = "Ingrese valores válidos";
    }
}

//ELEGIR OPERACIÓN
botones.forEach(boton => {
    boton.addEventListener("click", ()=>{
        console.log(boton.textContent);
        if (boton.textContent == 'Sumar'){
            sumar(n1.value, n2.value);
        } else if (boton.textContent == 'Restar'){
            restar(n1.value, n2.value);
        } else if (boton.textContent == 'Multiplicar'){
            multiplicar(n1.value, n2.value);
        } else {
            dividir(n1.value, n2.value);
        }
    })
});