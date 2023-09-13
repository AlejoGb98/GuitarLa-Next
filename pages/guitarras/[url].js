import Image from "next/image"
import Layout from "@/components/layout"
import styles from '../../styles/guitarras.module.css'
import { useState } from "react"

const Producto = ({guitarra, agregarCarrito}) => {
    const {nombre, descripcion, precio, imagen } = guitarra[0].attributes
    
    const [cantidad, setCantidad] = useState(0)

    const handleSubmit = e => {
        e.preventDefault()
        
        if(cantidad < 1){
            alert('Cantidad no valida')
            return
        }
        
        /* Si la condicion anterior no se cumple, generamos un objeto con los valores para guardar en LS  */
        const guitarraSeleccionada = {
            id: guitarra[0].id,
            imagen: imagen.data.attributes.url,
            /* Si llave y valor se llaman igual, podemos simplificarlo de la siguiente manera */
            nombre,
            precio,
            cantidad
        }

        //Pasando informacion al context
        agregarCarrito(guitarraSeleccionada)

    }




    return (
        <Layout
            title={`Guitarra ${nombre}`}
        >
            <div className={styles.guitarra}>
            <Image src={imagen.data.attributes.url} alt={`Imagen guitarra ${nombre}`} width={600} height={400} />

                <div className={styles.contenido}> 
                    <h3>{nombre}</h3>
                    <p className={styles.descripcion}>{descripcion}</p>
                    <p className={styles.precio}>$ {precio} </p>
                
                    <form 
                        onSubmit={handleSubmit}
                        className={styles.formulario}>
                        <label htmlFor="cantidad"> Cantidad </label>
                        <select 
                            id='cantidad'
                            /* Con el + logramos pasar a Numero el valor tomado del form que inicialmente es un string */
                            onChange={e => setCantidad(+e.target.value)}
                            >

                            <option value='0'> -- Seleccione -- </option>
                            <option value='1'> 1 </option>
                            <option value='2'> 2 </option>
                            <option value='3'> 3 </option>
                            <option value='4'> 4 </option>
                            <option value='5'> 5 </option>

                        </select>

                        <input
                            type='submit'
                            value='Agregar al Carrito'
                        />

                    </form>

                </div>
            </div>
        </Layout>
    )
}

export default Producto

//En esta funcion, se pasa automaticamente datos del Servidor. En este viene un dato llamado "query" y luego el dato del param en el nombre que le hayamos puesto
//al archivo. Le hacemos distructuring y nos quedamos con el valor de url.
/* export async function getServerSideProps({query: {url}}) {
    const respuesta = await fetch(`${process.env.API_URL}/guitarras?filters[url]=${url}&populate=imagen`)
    //Le hacemos distructuring a Data y lo nombramos como Guitarra
    const {data: guitarra} = await respuesta.json()

    //Lo pasamos como props a Producto para poder leer los datos
    return{
        props: {
            guitarra
        }
    }
} */

export async function getStaticProps({params: {url}}) {
    const respuesta = await fetch(`${process.env.API_URL}/guitarras?filters[url]=${url}&populate=imagen`)
    //Le hacemos distructuring a Data y lo nombramos como Guitarra
    const {data: guitarra} = await respuesta.json()

    //Lo pasamos como props a Producto para poder leer los datos
    return{
        props: {
            guitarra
        }
    }
} 

export async function getStaticPaths() {
    const respuesta = await fetch(`${process.env.API_URL}/guitarras`)
    const {data} = await respuesta.json()

    const paths = data.map(guitarra => ({
        params: {
            url: guitarra.attributes.url
        }
    }))

    return{
        paths,
        fallback: false
    }
}