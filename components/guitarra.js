import Image from "next/image"
import Link from "next/link"
import styles from '../styles/guitarras.module.css'

const Guitarra = ({guitarra}) => {
  // 1- Hacemos distructuring a guitarra para traer todos sus datos
  const {nombre, descripcion, precio, imagen, url } = guitarra
 
  return (
    <div className={styles.guitarra}>
      <Image src={imagen.data.attributes.formats.medium.url} alt={`Imagen guitarra ${nombre}`} width={600} height={400} />

      <div className={styles.contenido}> 
        <h3>{nombre}</h3>
        <p className={styles.descripcion}>{descripcion}</p>
        <p className={styles.precio}>$ {precio} </p>
        {/* Como el url es '/guitarras' creamos la carpeta 'guitarras' para hacer el routing */}
        <Link href={`/guitarras/${url}`} className={styles.enlace}>
            Ver producto
        </Link>
      </div>
    
    
    </div>

  )
}

export default Guitarra
