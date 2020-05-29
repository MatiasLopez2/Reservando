var expect = chai.expect;

describe('Testeá la función reservarHorario(horario)', function () {
    var restaurant = new Restaurant(1, "TAO Uptown", "Asiática", "Nueva York", ["13:00", "15:30", "18:00"], "../img/asiatica1.jpg", [6, 7, 9, 10, 5]);

    it('Cuando se reserva un horario de un restaurant, el horario correspondiente se elimina del arreglo.', function () {
        restaurant.reservarHorario("13:00");
        //expect(restaurant.horarios.includes("13:00")).to.be.false;
        expect(restaurant.horarios).to.be.an('array').that.does.not.include("13:00");
    })
    it('Cuando se reserva un horario que el restaurant no posee, el arreglo se mantiene igual.', function () {
        var tamanoAnterior = restaurant.horarios.length;
        restaurant.reservarHorario("13:30");
        expect(restaurant.horarios.length).to.equal(tamanoAnterior);
    })
    it('Cuando se reserva un horario pero sin parametros, el arreglo se mantiene igual.', function () {
        var tamanoAnterior = restaurant.horarios.length;
        restaurant.reservarHorario();
        expect(restaurant.horarios.length).to.equal(tamanoAnterior);
    })
})

describe('Testeá la función obtenerPuntuación()', function () {
    it('Dado un restaurant con determinadas calificaciones, la puntuación (que es el promedio de ellas) se calcula correctamente.', function () {
        var restaurant = new Restaurant(1, "TAO Uptown", "Asiática", "Nueva York", ["13:00", "15:30", "18:00"], "../img/asiatica1.jpg", [6, 7, 8]);
        expect(restaurant.obtenerPuntuacion()).to.equal(7);
    })
    it('Dado un restaurant que no tiene ninguna calificacion, la puntuacion es igual a 0', function(){
        var restaurant = new Restaurant(1, "TAO Uptown", "Asiática", "Nueva York", ["13:00", "15:30", "18:00"], "../img/asiatica1.jpg", []);
        expect(restaurant.obtenerPuntuacion()).to.equal(0);
    })
})

describe('Testeá la función calificar()', function () {
    var restaurant = new Restaurant(1, "TAO Uptown", "Asiática", "Nueva York", ["13:00", "15:30", "18:00"], "../img/asiatica1.jpg", [6, 7, 8]);
    it('Dado una calificación negativa, el arreglo de calificaciones permanece igual', function () {
        var tamanoAnterior = restaurant.calificaciones.length;
        restaurant.calificar(-2);
        expect(restaurant.calificaciones.length).to.equal(tamanoAnterior);
    })
    it('Dado una calificación mayor a 10, el arreglo de calificaciones permanece igual', function () {
        var tamanoAnterior = restaurant.calificaciones.length;
        restaurant.calificar(20);
        expect(restaurant.calificaciones.length).to.equal(tamanoAnterior);
    })
})

describe('Testeo de funcion buscarRestautante()', function(){
    it('Dado un ID, verificar que no se encuentre ingresado', function(){
        var restaurant = new Restaurant(25, "TAO Uptown", "Asiática", "Nueva York", ["13:00", "15:30", "18:00"], "../img/asiatica1.jpg", [6, 7, 8]);
        expect(listado.buscarRestaurante(restaurant.id)).to.not.include(25);  
    })
    it('Dado un ID, verificar que se encuentra ingresado', function(){
        var restaurant = new Restaurant(22, "TAO Uptown", "Asiática", "Nueva York", ["13:00", "15:30", "18:00"], "../img/asiatica1.jpg", [6, 7, 8]);
        listado.buscarRestaurante(22)
        expect(restaurant.id).to.equal(22);
    })
})    

describe('Testeo de funcion obtenerRestaurantes()', function(){
    it('Dado un Rubro, Ciudad y Horario, verifico que no sean NULL', function(){
        var restaurant = new Restaurant(22, "TAO Uptown", "Asiática", "Nueva York", ["13:00", "15:30", "18:00"], "../img/asiatica1.jpg", [6, 7, 8]);
        listado.obtenerRestaurantes("Asiática", "Nueva York", ["13:00", "15:30", "18:00"]);
        expect(restaurant.rubro,restaurant.ubicacion,restaurant.horarios).to.not.be.null;
    })
})

describe('Testeo de una reserva', function(){
    it('Que un restaurante calcule correctamente su precio base con DES1.', function () {
        var reserva1 = new Reserva(new Date(2018, 7, 24, 11, 00), 8, 350, "DES1");
        expect(reserva1.calcularPrecioBase()).to.equal(2800);
    })
    it('Que un restaurante calcule correctamente su precio final con DES1.', function () {
        var reserva1 = new Reserva(new Date(2018, 7, 24, 11, 00), 8, 350, "DES1");
        expect(reserva1.calcularPrecioFinal()).to.equal(2310);
    })
    it('Que un restaurante calcule correctamente su precio base con DES200.', function () {
        var reserva1 = new Reserva(new Date(2018, 7, 27, 14, 100), 2, 150, "DES200");
        expect(reserva1.calcularPrecioBase()).to.equal(300);
    })
    it('Que un restaurante calcule correctamente su precio final con DES200.', function () {
        var reserva1 = new Reserva(new Date(2018, 7, 27, 14, 100), 2, 150, "DES200");
        expect(reserva1.calcularPrecioFinal()).to.equal(100);
    })
})