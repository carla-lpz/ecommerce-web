// IMPORTS

// DOM: enlaces y variables globales
const categorias = []
const carrito = []
 
const container = document.querySelector('div.card-container')
const buttonCarrito = document.querySelector('div.shoping-cart')
const inputSearch = document.querySelector('input#inputSearch')
const seccionCategorias = document.querySelector('article.categories')

// LÓGICA
function crearCardHTML(producto) {
    return `<div class="card">
                <div class="product-image">${producto.imagen}</div>
                <div class="product-name">${producto.nombre}</div>
                <div class="product-price">$ ${producto.precio}</div>
                <div class="buy-button"><button id="buttonComprar" data-codigo="${producto.id}">COMPRAR</button></div>
            </div>`
}

function crearCardError() {
    return `<div class="card-error">
                <div class="error-title">
                    <h3>Se ha producido un error inesperado.</h3>
                    <div class="emoji-error">🔌</div>
                    <h4>Por favor, intenta acceder nuevamente en unos instantes.</h4>
                    <p>No estamos pudiendo cargar el listado de productos para tu compra.</p>
                    <div class="emoji-error">
                        <span>🥑</span>
                        <span>🍉</span>
                        <span>🍋‍🟩</span>
                        <span>🍏</span>
                    </div>
                </div>
            </div>`
}

function mostrarToast(mensaje, estilo) {
    ToastIt.now({
        style: estilo,
        message: mensaje,
        close: true,
    })
}

function agregarEventosClick() {
    const botonesComprar = document.querySelectorAll('button#buttonComprar')
    if (botonesComprar.length > 0) {
        botonesComprar.forEach((boton)=> {
            boton.addEventListener('click', ()=> {
                let productoElegido = productos.find((producto)=> producto.id ===  boton.dataset.codigo )
                if (productoElegido !== undefined) {
                    carrito.push(productoElegido)
                    let mensaje = `'${productoElegido.nombre}' agregado al carrito`
                    mostrarToast(mensaje, 'success')
                    guardarCarrito()
                } else {
                    alert(' No se encontró el producto.')
                }
            })
        })
    }
}

function guardarCarrito() {
    if (carrito.length > 0) {
        let kart = JSON.stringify(carrito)
        localStorage.setItem('shoppingKart', kart)
    }
}

function recuperarCarrito() {
    const recuperarCarrito = JSON.parse(localStorage.getItem('shoppingKart'))

    if (Array.isArray(recuperarCarrito)) {
        carrito.push(...recuperarCarrito)
    }
}

function cargarProductos(arrayProductos) {
    if (arrayProductos.length > 0) {
        container.innerHTML = ''
        arrayProductos.forEach((producto)=> {
            container.innerHTML += crearCardHTML(producto)
        })
        agregarEventosClick()
    } else {
        container.innerHTML = crearCardError()
        console.error("No se pudieron cargar los productos.")
    }
}

// EVENTOS
buttonCarrito.addEventListener('click', ()=> {
    if (carrito.length > 0) {
        location.href = "checkout.html"
    } else {
        alert('⛔️ Agrega al menos un producto al carrito.')
    }
})

inputSearch.addEventListener('search', ()=> {
    let valor = inputSearch.value.trim().toLowerCase()
    let productosEncontrados = productos.filter((producto)=> producto.nombre.toLowerCase().includes(valor) )

    if (productosEncontrados.length > 0) {
        cargarProductos(productosEncontrados)
    } else {
        alert('🔎 No se encontraron coincidencias.')
    }
})

// FUNCIÓN PRINCIPAL
cargarProductos(productos)
recuperarCarrito()