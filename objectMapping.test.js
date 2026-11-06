const getObjectDescription = require('./objectMapping');
describe('Pruebas para getObjectDescription', () => {
    test('a la funcion getObjetDescription debe esxixtir', () => {
        expect(typeof getObjectDescription).toBe('function');
    });

    test('b. Retorna "Activo" cuando el parametro es "ACTIVO"', () => {
        expect(getObjectDescription('ACTIVO')).toBe('Activo');
    });

    test('c. Retorna undefined cuando el parametro no esta en el objeto', () => {
        expect(getObjectDescription('ARCHIVADO')).toBe();
    });
 
     test('d. Retorna mensaje cuando el parametro esta vacio', () => {
        expect(getObjectDescription('')).toBe("El parámetro \'tipo\' no existe");
    });

     test('e. Retorna mensaje cuando no se pasa ningun parametro', () => {
        expect(getObjectDescription()).toBe("El parámetro \'tipo\' no existe");
    });
});