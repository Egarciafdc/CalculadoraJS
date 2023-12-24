const displayValorAnterior = document.querySelector("#valor-anterior");
const displayValorActual = document.querySelector("#valor-actual");
const botonesNum = document.querySelectorAll(".numero");
const botonesOp = document.querySelectorAll(".operador");
const botonesExtra = document.querySelectorAll(".extra");
const botonBorrarTodo = document.querySelector(".borrarT")

const display = new Display(displayValorAnterior, displayValorActual)
var band = 0;
var b2 = 0;

botonesNum.forEach(boton => {
    boton.addEventListener("click", () => {
        boton.classList.add(".animado");
        if (band > 0) {
            display.agregarNumero(boton.innerHTML);
        }
        else if (boton.innerHTML != 0) {
            botonBorrarTodo.innerHTML = "C";
            display.agregarNumero(boton.innerHTML);
            band = 1;
        }
    });
});

botonesOp.forEach(boton => {
    boton.addEventListener("click", () => {
        botonBorrarTodo.innerHTML = "C";
        display.computar(boton.value);
        band = 0;
    })
});

botonesExtra.forEach(boton => {
    boton.addEventListener("click", () => {
        band = 0;
    })
});

botonBorrarTodo.addEventListener("click", () => {
    botonBorrarTodo.innerHTML = "AC";
})