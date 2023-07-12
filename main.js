function subastaJohnnieWalkerBlueLabel() {
    let ofertaComprador = prompt("Subasta de Johnnie Walker Blue Label. (Precio base $150.000) Ingrese su oferta");
    let ofertaBase = 150000;

    while (isNaN(ofertaComprador) || ofertaComprador === "" || ofertaComprador < ofertaBase) {
    if (isNaN(ofertaComprador) || ofertaComprador === "") {
        alert("Por favor, ingresa un número válido como oferta.");
    } else {
        alert("Tu oferta es muy baja, ofrecé igual o mayor a $150.000.");
    }
    ofertaComprador = prompt("Ingrese una nueva oferta");
    
    realizarAccionAdicional("Ganador de la subasta!");
    }
    if (ofertaComprador >= ofertaBase) {
    alert("Oferta aceptada. Venta concluida. ¡Felicitaciones!");
    }
}

function realizarAccionAdicional() {
    alert("Ganador de la subasta!");
}

subastaJohnnieWalkerBlueLabel();






