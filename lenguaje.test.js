const lenguajePagina = require('./lenguaje');

 

test('Revisamos el valor de retorno del lenguaje selecionado', () => {

    expect(lenguajePagina('es-ES')).toBe('/acerca-de-nosotros');
    expect(lenguajePagina('en-US')).toBe('/about-us');
    expect(lenguajePagina('fr-FR')).toBe('/a-propos');

});