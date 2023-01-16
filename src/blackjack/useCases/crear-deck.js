import _ from 'underscore';

/**
 * Esta funcion crea un nuevo deck
 * @param {Array<String>} tiposDeCarta Ej:
 * @param {Array<String>} tiposEspeciales Ej:
 * @returns {Array<String>} Regresa un nuevo deck de cartas
 */

export const crearDeck = ( tiposDeCarta, tiposEspeciales ) => {

    if ( !tiposDeCarta ) throw new Error('TiposDeCarta es obligatorio')

    let deck = []

    for( let i = 2; i <= 10; i++ ) {
        for( let tipo of tiposDeCarta ) {
            deck.push( i + tipo);
        }
    }

    for( let tipo of tiposDeCarta ) {
        for( let esp of tiposEspeciales ) {
            deck.push( esp + tipo);
        }
    }
    deck = _.shuffle( deck );
    return deck;
}

// export default crearDeck
