class CarritoCompra {
    constructor(){
        this.carrito = [];
    }

    agregarProducto(nuevoProducto){
        this.carrito.push(nuevoProducto);
    }

    calcularTotal(){
        return this.carrito.reduce((acum, producto) => acum+= producto.price, 0)
    }

    aplicarDescuento(descuento){
        const total = this.carrito.reduce((acum, producto) => acum+= producto.price, 0)
        return total-(total*(descuento/100))
    }
}


module.exports = {
    CarritoCompra
}