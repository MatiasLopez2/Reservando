var Reserva = function(horario, personas, precio, codigo){
    this.horario = horario;
    this.personas = personas;
    this.precio = precio;
    this.codigo = codigo;
}

Reserva.prototype.calcularPrecioBase = function(){
    return this.personas*this.precio;
}

Reserva.prototype.calcularPrecioFinal = function(){
    var precioBase = this.calcularPrecioBase();
    var precioFinal = precioBase;
    var descuento = this.calcularDescuentos();
    var adicional = this.calcularAdicionales();

    var precioFinal = precioBase - descuento + adicional;
    return precioFinal;
}

Reserva.prototype.calcularDescuentos = function(){
    var precioBase = this.calcularPrecioBase();
    var descuento = 0;
    
    if(this.personas >= 4 && this.personas < 6){
        descuento = precioBase * (0.05);
    }
    else if(this.personas >= 6 && this.personas < 8){
        descuento = precioBase * (0.1);
    }
    else if(this.personas >= 8){
        descuento = precioBase * (0.15);
    }

    switch(this.codigo){
        case "DES15":
            descuento += precioBase * 0.05;
        break;
        case "DES200":
            descuento += 200;
        break;
        case "DES1":
            descuento += this.precio;
        break;
        default:
    }

    return descuento;
}

Reserva.prototype.calcularAdicionales = function(){
    var adicional = 0;
    var precioBase = this.calcularPrecioBase();
    var hora = this.horario.getHours();
    var dia = this.horario.getDay();

    if(dia === 0 || dia === 5 || dia === 6){
        adicional += precioBase * (0.1);
    }
    if((hora >= 13 && hora <= 14) || (hora >= 20 && hora <= 21)){
        adicional += precioBase * (0.05);
    }

    return adicional;
}
