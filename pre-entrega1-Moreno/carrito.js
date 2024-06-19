//Ver elementos disponibles en el mercado
//Agregar un producto si existe en el mercado
//Ver carrito 
//Eliminar un elemento del carrito 
//Pagar carrito

const elementosMercado = ["Teclado","Mouse","Pantalla","Soporte","Auriculares","Xbox"]
const carrito = []

let opc1 = "1. Ver elemento disponibles"
let opc2 = "2. Agregar un producto"
let opc3 = "3. Ver carrito"
let opc4 = "4. Eliminar un elemento del carrito."
let opc5 = "5. Pagar Carrito."
let opc6 = "6. Salir de la tienda"

let salir = true;

while(salir){
    
    function MenuPrincipal(){
        let opcionMenu = prompt(`MENU PRINCIPAL\n ${opc1} \n ${opc2} \n ${opc3} \n ${opc4} \n ${opc5} \n ${opc6}`)
    
        if(parseInt(opcionMenu) < 7 && parseInt(opcionMenu) > 0){
            Menu(opcionMenu)
        }else{
            alert("Opcion no valida.")
        }
    }
    
    
    function Menu(opcionMenu){
        switch(opcionMenu){     
            case '1':
                prompt(`ELementos disponibles:\n${ElementosDisponibles()}`)
                break;
            case '2':
                AgregarProducto()
                break;
            case '3':
                VerCarrito()
                break;
            case '4':
                EliminarElemento()
                break;
            case '5':
                Pagar()
                break;
            case '6':
                Salir()
                break;
        }
    }
    
    function ElementosDisponibles(){
        return elementosMercado.join("\n")
    }
    
    function AgregarProducto(){
        let producto = prompt("Agrega el nombre del producto:")
    
        if(elementosMercado.includes(producto)){
            carrito.push(producto)
            alert(`"${producto}" agregado al carrito.`)
        }else{
            alert("El producto ingresado no está disponible.");
        }
    }
    
    function VerCarrito(){
    
        if(carrito.length){
            alert(`Estos son sus productos:\n${carrito.join("\n")}`)
        }
        else{  
            alert(`No hay elementos en el carrito.`)
    
        }
    }
    
    function EliminarElemento(){
        let producto = prompt("¿Que elemento desea quitar del carrito?")
        const indice = carrito.indexOf(producto);
        
        if (indice !== -1) {
            alert(`Elemento eliminado del carrito`)
            carrito.splice(indice, 1);
        }else{
        alert(`El elemento no existe en el carrito.`)
        }
        
    }
    
    function Pagar(){
        total = carrito.length * 50000
        let pago = confirm(`El total de la compra es: $${total}. ¿Desea confirmar la compra?`);
        if(pago){
        alert(`Gracias por su compra.\nVUELVA PRONTO`)
        }else{
        alert(`Compra cancelada.`)
        }
        
    }

    function Salir(){
        salir = false;
        alert("VUELVA PRONTO")
    }
    MenuPrincipal()
}


