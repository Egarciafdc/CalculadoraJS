const tablero = document.querySelector("#result");

// Botones de operaciones de la calculadora
const BTNdelete = document.querySelector(".delete");
const BTNplusminus = document.querySelector(".plusminus");
const BTNplus = document.querySelector(".plus");
const BTNminus = document.querySelector(".minus");
const BTNdivide = document.querySelector(".divide");
const BTNmultiply = document.querySelector(".delete");
const BTNequal = document.querySelector(".equal");
const BTNcoma = document.querySelector(".coma");

//Botones de numeros en la calculadora

const B1 = document.querySelector(".b1");
const B2 = document.querySelector(".b2");
const B3 = document.querySelector(".b3");
const B4 = document.querySelector(".b4");
const B5 = document.querySelector(".b5");
const B6 = document.querySelector(".b6");
const B7 = document.querySelector(".b7");
const B8 = document.querySelector(".b8");
const B9 = document.querySelector(".b9");
const B0 = document.querySelector(".b0");

var band = 0;
var bandComa = 0;
var bandOp = 0;


B1.addEventListener("click", function () {
    botonNum(1);
});

B2.addEventListener("click", function () {
    botonNum(2);
});

B3.addEventListener("click", function () {
    botonNum(3);
});

B4.addEventListener("click", function () {
    botonNum(4);
});

B5.addEventListener("click", function () {
    botonNum(5);
});

B6.addEventListener("click", function () {
    botonNum(6);
});

B7.addEventListener("click", function () {
    botonNum(7);
});

B8.addEventListener("click", function () {
    botonNum(8);
});

B9.addEventListener("click", function () {
    botonNum(9);
});

B0.addEventListener("click", function () {
    botonNum(0);
});

BTNcoma.addEventListener("click", function () {
    aggComa(",");
});


function botonNum(x) {
    if (band > 0 || bandComa == 1) {
        tablero.innerText += x;
    }
    else if (x != 0) {
        tablero.innerText = x;
        return band = 1;
    }
};

function aggComa(x) {
    if (bandComa == 0) {
        tablero.innerText += x;
        bandComa = 1;
    }
};

var convertido = 0;

function convertirNum(x) {
    var convertido = parseFloat(x.innerText);
    return convertido;
}

BTNdelete.addEventListener("click", function () {
    tablero.innerText = 0;
    return band = 0, bandComa = 0;
});

BTNplusminus.addEventListener("click", function () {
    tablero.innerText = convertirNum(tablero) * -1;
});

BTNplus.addEventListener("click", function () {
    opsuma();
})

function opsuma() {
    var Val1 = convertirNum(tablero.innerText);
    tablero.innerText
}

function verifycontent() {
    if (band != 0) {
        var Valor = convertirNum(tablero.innerText);
        tablero.innerText = "0";
        return Valor;
    }
    return Valor = 0;
}

var sum = 0;

function suma() {
    var V1 = verifycontent(tablero);
    band = 0;
    var V2 = verifycontent(tablero);
    sum = 1;
    return V1 + V2;
};

BTNplus.addEventListener("click", function () {
    resultsum = suma();
});

BTNequal.addEventListener("click", function () {
    if (sum = 1) {
        tablero.innerText = resultsum;
    };
});


function plus(a, b) {
    return a + b;
}



















// BTNequal.addEventListener("click", function () {
//     switch (op) {
//         case 1:
//             tablero.innerText = opsuma() + parseFloat(tablero.innerText);

//     }
// })

// function operacion() {
//     if (tablero.innerText != 0 && number1 == 0) {
//         numero1 = parseFloat(tablero.innerText);
//         number1 = 1;
//         tablero.innerText = 0;
//     } else if (number1 == 1) {
//         numero2 = parsefloat(tablero.innerText)
//     }
//     return numero1, numero2;
// }

// BTNplus.addEventListener("click", function () {
//     operacion();
// });

// BTNequal.addEventListener("Click", function () {
//     if (k == 1) {
//         tablero.innerText = numero1 + numero2;
//     }
// })


// function verifycontent() {
//     if (band != 0) {
//         var Valor = convertirNum(tablero.innerText);
//         tablero.innerText = "0";
//         return Valor;
//     }
//     return tablero.innerText = 0;

// }
// var resultsum = 0;

// BTNplus.addEventListener("click", function () {
//     resultsum = suma();
// });
// var sum = 0;
// function suma() {
//     var V1 = verifycontent(tablero);
//     band = 0;
//     var V2 = verifycontent(tablero);
//     sum = 1;
//     return V1 + V2;
// };

// BTNequal.addEventListener("click", function () {
//     if (sum = 1) {
//         tablero.innerText = resultsum;
//     };
// });

