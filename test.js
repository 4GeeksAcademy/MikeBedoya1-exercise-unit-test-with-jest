test("One euro should be 1.07 dollars", function() {
    // Importo la funcion desde app.js
    const { fromEuroToDollar } = require('./app.js');

    // Uso la función como debe ser usada
    const dollars = fromEuroToDollar(3.5);

    // Si 1 euro son 1.07 dólares, entonces 3.5 euros debe ser (3.5 * 1.07)
    const expected = 3.5 * 1.07;

    // Hago mi comparación (la prueba)
    expect(fromEuroToDollar(3.5)).toBe(3.745); // 1 euro son 1.07 dólares, entonces 3.5 euros deberían ser = (3.5 * 1.07)
});

test('One dollar should be 156.5 yens', function() {
    // Importo la funcion desde app.js
    const { fromDollarToYen } = require('./app.js');
    // Uso la función como debe ser usada
    const yens = fromDollarToYen(2.4);
    // Si 1 dolar son 156.5, entonces 2.4 dolares deben ser (2.4 * 156.5)
    const expected = 2.4 * 156.5;
    // Hago mi comparación (la prueba)
    expect(fromDollarToYen(2.4)).toBe(375.6);
});

test("one yen should be 0.87 pounds", function() {
    // Importo la funcion desde app.js
    const { fromYenToPound } = require('./app.js');
    // Uso la funcion como debe ser usada
    const pound = fromYenToPound(15);
    // Si un yen son 156.5, entonces 15 yenes deben ser (15 * 0.87)
    const expected = 15 * 0.87;
    // Hago la prueba
    expect(fromYenToPound(15)).toBe(13.05);

});



const { sum } = require('./app.js');

test('adds 14 + 9 to equal 23', () => {
    let total = sum(14, 9);
    expect(total).toBe(23);
});

