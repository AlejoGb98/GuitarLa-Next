import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'

import styles from "../styles/header.module.css"

const Header = () => {
    
    /* 2- El componente UseRouter nos permite extraer datos de la pagina en la que estamos. */
    const router = useRouter();  
  
    return (
   <header className={styles.header}>

    <div className={`contenedor ${styles.barra}`}>

        <Link href='/'>
            {/* 1- Width y Height son dos propiedades obligatorias para el componente Image */}
            <Image src={'/img/logo.svg'} width={300} height={40} alt='imagen logotipo'/>
        </Link>

        <nav className={styles.nav}>
            {/* 3- Una vez que tenemos el router podemos leer el pathname y modificar sus estilos segun donde estemos */}
            <Link href='/' className={router.pathname === '/' ? styles.active : ''}>
                Inicio
            </Link>

            <Link href='/nosotros' className={router.pathname === '/nosotros' ? styles.active : ''}>
                Nosotros
            </Link>

            <Link href='/blog' className={router.pathname === '/blog' ? styles.active : ''}>
                Blog
            </Link>

            <Link href='/tienda' className={router.pathname === '/tienda' ? styles.active : ''}>
                Tienda
            </Link>

            <Link href='/carrito'>
                <Image width={30} height={20} src='/img/carrito.png' alt='imagen carrito '/>
            </Link>
             
        </nav>
    
    </div>
        
   </header>
  )
}

export default Header
