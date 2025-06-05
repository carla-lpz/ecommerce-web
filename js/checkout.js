// VARIABLES
const carrito = []

const precioTotal = document.querySelector('table tfoot td#totalPrice span')
const btnComprar = document.querySelector('button#btnBuy')
const btnRetornar = document.querySelector('button#btnReturn')
const tableBody = document.querySelector('table tbody#tableBody')

// LÓGICA
function recuperarCarrito() {
    const recuperarCarrito = JSON.parse(localStorage.getItem('shoppingKart'))

    if (Array.isArray(recuperarCarrito)) {
        carrito.push(...recuperarCarrito)
    }
}

function calcularTotalCarrito() {
    if (carrito.length > 0) {
        precioTotal.textContent = carrito.reduce((acc, prod)=> acc + prod.precio, 0).toFixed(2) || 0.00
    }
}

function crearFilaCarrito(prod) {
    return `<tr>
                <td id="pImagen">${prod.imagen}</td>
                <td id="nombre">${prod.nombre}</td>
                <td id="price">$ ${prod.precio.toFixed(2)}</td>
                <td id="delButton" 
                    data-codigo="${prod.id}"
                    title="Clic para eliminar">
                    ⛔️
                </td>
            </tr>`
}

function mostrarToast(mensaje, estilo) {
    ToastIt.now({
        style: estilo,
        message: mensaje,
        close: true,
    })
}

function mostrarCarrito() {
    if (carrito.length > 0) {
        tableBody.innerHTML = ''
        carrito.forEach((prod)=> {
            tableBody.innerHTML += crearFilaCarrito(prod)
        })
        calcularTotalCarrito()
        btnComprar.removeAttribute('disabled')
    }
}

// FUNCIÓN PRINCIPAL
recuperarCarrito()
mostrarCarrito()

// EVENTOS
btnRetornar.addEventListener('click', ()=> location.href = 'index.html')

btnComprar.addEventListener('click', ()=> {
    alert('🛍️ Compra finalizada. Muchas gracias!')
    localStorage.removeItem('shoppingKart')
    carrito.length = 0
    setTimeout(() => btnRetornar.click(), 2500)
})

window.addEventListener('offline', ()=> {
    mostrarToast('Perdiste conexión a internet', 'error')
    btnComprar.setAttribute('disable', 'true')
    btnRetornar.setAttribute('disable', 'true')
})

window.addEventListener('online', ()=> {
    mostrarToast('Estás conectado nuevamente a internet', 'info')
    btnComprar.removeAttribute('disable')
    btnRetornar.removeAttribute('disable')
})