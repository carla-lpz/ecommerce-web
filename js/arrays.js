function filtrarProductosPorNombre(){
    let valor = prompt('ingrese el nombre de producto a filtrar')
    valor = valor.trim().toLowerCase()
    
    //Camino feliz.
    //let productosEncontrados = productos.filter((productos) => productos.nombre === valor)

    //Busqueda dentro de un texto.
    //let productosEncontrados = productos.filter((producto) => producto.nombre.includes(valor))

    //Normalizar texto de una busqueda:
    let productosEncontrados = productos.filter((producto) => producto.nombre.toLowerCase().includes(valor))

    console.log(productosEncontrados)
  }

  function mapearProductos() {
    let nuevoArray = productos.map((producto)=> {
      return {
        codigo: producto.id,
        nombre: producto.nombre.toUpperCase(),
        importe: producto.precio
      }
    })
    console.log(nuevoArray)
  }

  function ordenarProductos() {
    let veces = 0
    productos.sort((a, b) => { //ordenar por precio
      veces++
      if (a.precio > b.precio) return 1  //para invertir el orden ascendente a descendente solo invertimos los valores o los signos de comparacion
      if (a.precio < b.precio) return -1
      return 0
    })
    console.log("Veces iteradas: ", veces)
    console.table(productos)
  }