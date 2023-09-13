import '@/styles/globals.css'
import { useEffect, useState } from 'react'

export default function App({ Component, pageProps }) {
  
  //Con este codigo resolvemos el error de hydratacion entre cliente-servidor
  const [paginaLista, setPaginaLista] = useState(false);
  useEffect(() => {
    setPaginaLista(true);
  }, [])
  

  //LS es una api del navegador, por ende con el siguiente codigo evitamos que tire error por el lado del Servidor
  const carritoLS = typeof window !== 'undefined' ? JSON.parse(localStorage.getItem('carrito')) ?? [] : [];

  //Al tener carrito en App, esta dispobible en todas las paginas
  const [carrito, setCarrito] = useState(carritoLS)

  //Cada que carrito actualice, actualiza el mismo en LS
  useEffect( () => {
    localStorage.setItem('carrito', JSON.stringify(carrito))
  }, [carrito])
  
  const agregarCarrito = guitarra => {
    //Comprobar si la guitarra ya esta en el carrito
    if(carrito.some(guitarraState => guitarraState.id === guitarra.id)) {
      //Si esta, creamos la variable actualizada e iteramos para encontrarla y actualizarle la cantidad
      const carritoActualizado = carrito.map( guitarraState => {
        if(guitarraState.id === guitarra.id) {
          guitarraState.cantidad = guitarra.cantidad
        }
        //Devolvemos la guitarra al array de carritoActualizado igual si no se modifico, o modificada si se modifico
        return guitarraState;
      })
      //Actualizamos carrito con el nuevo array de carrito actualizado y lo guardamos en LS
      setCarrito([carritoActualizado]);
      localStorage.setItem('carrito', JSON.stringify( carrito ));
    } else {
      //En caso de que no exista en carrito (producto nuevo) se agrega
      //Tomamos una copia de carrito y agregamos la guitarra. Guardamos en LS
      setCarrito([...carrito, guitarra])
      localStorage.setItem('carrito', JSON.stringify( carrito ));
    }
  }

  const eliminarProducto = id => {
    //Creamos la variable del carrito actualizado y filtramos carrito para eliminar la de id coincidente
    //El metodo filter crea un nuevo array con todos los elementos que cumplan la condicion
    const carritoActualizado = carrito.filter(producto => producto.id != id)
    setCarrito(carritoActualizado)
    /* window. */ localStorage.setItem('carrito', JSON.stringify( carrito ));
  }
  

  const actualizarCantidad = guitarra => {
    //Creamos la variable de carrito actualizado e iteramos sobre carrito para encontrar la coincidente
    const carritoActualizado = carrito.map( guitarraState => {
      if(guitarraState.id === guitarra.id){
        guitarraState.cantidad = guitarra.cantidad
      }
      return guitarraState
    })
    setCarrito(carritoActualizado)
    window.localStorage.setItem('carrito', JSON.stringify( carrito ));
  }



  return paginaLista ? <Component {...pageProps} 
    carrito={carrito}
    agregarCarrito = {agregarCarrito}
    actualizarCantidad = {actualizarCantidad}
    eliminarProducto = {eliminarProducto}
  /> : null
}
