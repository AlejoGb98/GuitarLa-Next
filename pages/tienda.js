import Layout from "@/components/layout"
import Guitarra from "@/components/guitarra"
import styles from '../styles/grid.module.css'

export default function Tienda({guitarras}) {

  return (
    
    <Layout
        title={'Tienda'}
        description={'Tienda de guitarras'}
    >

      <main className="contenedor">
        <h1 className="heading">Nuestra Coleccion</h1>

        <div className={styles.grid}>
          {guitarras?.map(guitarra => (
            <Guitarra 
              key={guitarra.id}
              guitarra={guitarra.attributes}
            />
          ))}
        </div>

      </main>
      
    </Layout>
    
  )
}


/* 1 - Esta informacion no va a estarse regenerando con cada visita */
/* La informacion que trae getStaticProps no se actualiza */
/* export async function getStaticProps(){
  //Con proces.env traemos la URL que ocultamos y declaramos como "API_URL" 
  const respuesta = await fetch(`${process.env.API_URL}/guitarras?populate=imagen`)
  //Aplicamos destroctouring y lo renombramos como guitarras
  const {data: guitarras} = await respuesta.json()

  return{
    props: {
      guitarras
    }
  }
} */

/* serverSideProps tiene la ventaja de que se actualiza automaticamente */
 export async function getServerSideProps(){
  // Con proces.env traemos la URL que ocultamos y declaramos como "API_URL" 
  const respuesta = await fetch(`${process.env.API_URL}/guitarras?populate=imagen`)
  // Aplicamos destroctouring y lo renombramos como guitarras
  const {data: guitarras} = await respuesta.json()

  return{
    props: {
      guitarras
    }
  }
}