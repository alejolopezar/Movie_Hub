const { CarritoCompra } = require("../index.js")

describe("Class CarritoCompra", () => {


    it ("La clase CarritoCompra debe existir", () => {
        expect(CarritoCompra).toBeDefined()
        expect(typeof CarritoCompra).toBe("function")
        expect(CarritoCompra).toBeInstanceOf(Function)
    })

    it("la clase CarritoCompra debe poder ser instanciada", () => {
        const nuevoCarrito = new CarritoCompra()
        expect(nuevoCarrito).toBeDefined()
        expect(nuevoCarrito).toBeInstanceOf(CarritoCompra)
    })

    it("la clase CarritoCompra debe tener los siguientes metodos: ", () => {
        expect(CarritoCompra.prototype.constructor).toBeDefined()
        expect(CarritoCompra.prototype.agregarProducto).toBeDefined()
        expect(CarritoCompra.prototype.calcularTotal).toBeDefined()
        expect(CarritoCompra.prototype.aplicarDescuento).toBeDefined()
    })
})


describe("Constructor", () => {

    it("Inicializa el carrito como un array vacío", () => {
        const nuevoCarrito = new CarritoCompra()
        expect(nuevoCarrito.carrito).toEqual([])
    })
})


describe("agregarProducto", () => {
    it("Recibe un objeto representando un producto y lo agrega al carrito", () => {
        const nuevoCarrito = new CarritoCompra()
        const nuevoProducto = {
            name: "producto 1",
            price: 300
        }
        const nuevoProducto2 = {
            name: "producto 2",
            price: 600
        }
        nuevoCarrito.agregarProducto(nuevoProducto)
        nuevoCarrito.agregarProducto(nuevoProducto2)
        expect(nuevoCarrito.carrito[0]).toEqual(nuevoProducto)
        expect(nuevoCarrito.carrito[1]).toEqual(nuevoProducto2)
        expect(nuevoCarrito.carrito[0].name).toBe("producto 1")
        expect(nuevoCarrito.carrito).toContainEqual(nuevoProducto2)
    })
})


describe("calcularTotal", () => {
    it("Calcular el total de la compra sumando los precios de todos los productos en el carrito", () => {
        const nuevoCarrito = new CarritoCompra()
        const nuevoProducto = {
            name: "producto 1",
            price: 300
        }
        const nuevoProducto2 = {
            name: "producto 2",
            price: 600
        }
        nuevoCarrito.agregarProducto(nuevoProducto)
        nuevoCarrito.agregarProducto(nuevoProducto2)
        expect(nuevoCarrito.calcularTotal()).toBe(900)
    })
})


describe("aplicarDescuento", () => {
    it("Aplicar un descuento al total de la compra segun el porcentaje especificado", () => {
        const nuevoCarrito = new CarritoCompra()
        const nuevoProducto = {
            name: "producto 1",
            price: 300
        }
        const nuevoProducto2 = {
            name: "producto 2",
            price: 600
        }
        nuevoCarrito.agregarProducto(nuevoProducto)
        nuevoCarrito.agregarProducto(nuevoProducto2)
        expect(nuevoCarrito.aplicarDescuento(0)).toBe(900)
        expect(nuevoCarrito.aplicarDescuento(50)).toBe(450)
        expect(nuevoCarrito.aplicarDescuento(100)).toBe(0)
    })
})