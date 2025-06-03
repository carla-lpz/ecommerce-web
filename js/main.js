// DOM: enlaces y variables globales
const categorias = []
// const productos = []
const carrito = []

//<div class="card-container">
const container = document.querySelector('div.card-container')
const buttonCarrito = document.querySelector('div.shoping-cart')
const inputSearch = document.querySelector('input#inputSearch')
const seccionCategorias = document.querySelector('article.categories')

// const footer = dom('footer')
// const arrowUp = dom('div.arrow-style')

// HTML


// LÓGICA

function crearCardHTML(producto) {
    //{ "id": "1", "imagen": "🍌", "nombre": "Bananas", "precio": 1220, "categoria": "Fruta" }
    // `` template string
    // ${} template literal
    return `<div class="card">
                <div class="product-image">${producto.imagen}</div>
                <div class="product-name">${producto.nombre}</div>
                <div class="product-price">${producto.precio}</div>
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

function agregarEventosClick() {
    const botonesComprar = document.querySelectorAll('button#buttonComprar')
    if (botonesComprar.length > 0) {
            botonesComprar.forEach((boton)=> {
                boton.addEventListener('click', ()=> {
                    let productoElegido = productos.find((producto)=> producto.id === boton.dataset.codigo)
                    if (productoElegido !== undefined) {
                        carrito.push(productoElegido)
                    } else {
                        alert('No se encontró el producto.')
                    }
                    
                })
                
            })
    }
}

function cargarProductos(arrayProductos) {
    if (arrayProductos.length > 0){
        container.innerHTML = ''
        arrayProductos.forEach((producto)=> {
            container.innerHTML += crearCardHTML(producto)
        })
        agregarEventosClick()
    }
    else {
        container.innerHTML = crearCardError()
        console.warm('No se pudieron cargar los productos.')
    }
}


// EVENTOS
buttonCarrito.addEventListener('click', ()=> {
    if (carrito.length > 0) {
        location.href = "checkout.html"
    } else {
        alert('Agregar al menos un producto al carrito.')
    }	
})

inputSearch.addEventListener('search', ()=> {  //lo que nos enlasa con la caja de texto de busqueda, se activa cuando se pulsa enter
    let valor = inputSearch.value.trim().toLowerCase()
    let productosEncontrados = productos.filter((producto) => producto.nombre.toLowerCase().includes(valor))
    if (productosEncontrados.length > 0) {
        cargarProductos(productosEncontrados)
    } else {
        alert('No se encontraron productos con ese nombre.')
    }
})

// FUNCIÓN PRINCIPAL
cargarProductos(productos)