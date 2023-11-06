const tipo_seguros = document.getElementById("tipoSeguro")
const button = document.getElementById("button")
let valor = document.getElementById("valorSeguro");

console.log(tipo_seguros);

tipo_seguros.addEventListener('change', () => {
    let valor_tipo = tipo_seguros.value;
    console.log(valor_tipo);
    valor.value = valor_tipo;
})

button.addEventListener("click", ()=>{
    alert("Mensaje de clic")
})


