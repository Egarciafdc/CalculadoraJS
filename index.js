const displayValorAnterior = document.querySelector("#valor-anterior");
const displayValorActual = document.querySelector("#valor-actual");
const botonesNum = document.querySelectorAll(".numero");
const botonesOp = document.querySelectorAll(".operador");

const display = new Display(displayValorAnterior, displayValorActual)

botonesNum.forEach(boton => {
    boton.addEventListener("click", () => {
        display.agregarNumero(boton.innerHTML);
    });
});

botonesOp.forEach(boton => {
    boton.addEventListener("click", () => {
        display.computar(boton.value);
    })
})