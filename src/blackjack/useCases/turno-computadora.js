import { valorCarta, pedirCarta, crearCartaHTML } from "./";

/**
 * Ejecucion del Turno de la computadora
 * @param {Number} puntosMinimos que la computadora necesita para ganar
 * @param {HTMLElement} puntosHTML elemento HTML donde mostrar los puntos
 * @param {HTMLElement} divCartasComputadora elemento HTML donde mostrar las cartas de la computadora
 * @param {Array<String>} deck de cartas
 */

export const turnoComputadora = ( puntosMinimos, puntosHTML, divCartasComputadora ,deck = [] ) => {

    if ( !puntosMinimos ) throw new Error('Puntos minimos son requeridos')
    if ( !puntosHTML ) throw new Error('Argumento requerido')

    let puntosComputadora = 0

    do {
        const carta = pedirCarta( deck );

        puntosComputadora = puntosComputadora + valorCarta( carta );
        puntosHTML.innerText = puntosComputadora;
        
        // <img class="carta" src="assets/cartas/2C.png">
        const imgCarta = crearCartaHTML( carta )
        divCartasComputadora.append( imgCarta );

        if( puntosMinimos > 21 ) {
            break;
        }

    } while(  (puntosComputadora < puntosMinimos)  && (puntosMinimos <= 21 ) );

    setTimeout(() => {
        if( puntosComputadora === puntosMinimos ) {
            alert('Nadie gana :(');
        } else if ( puntosMinimos > 21 ) {
            alert('Computadora gana')
        } else if( puntosComputadora > 21 ) {
            alert('Jugador Gana');
        } else {
            alert('Computadora Gana')
        }
    }, 100 );
}