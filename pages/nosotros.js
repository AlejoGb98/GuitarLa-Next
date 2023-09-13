import Layout from '@/components/layout'
import React from 'react'
import Image from 'next/image'

import styles from '../styles/nosotros.module.css'

const Nosotros = () => {
  return (

    <Layout
        title={'Nosotros'}
        description={'Blog de musica, venta de guitarras y mas'}
    >

      <main className='contenedor'>
        <h1 className='heading'>Nosotros</h1>

        <div className={styles.contenido}>
          <Image src='/img/nosotros.jpg' alt='sobre nosotros' width={1000} height={800}></Image>

          <div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vel purus dolor. 
              Quisque pharetra dolor lorem, et cursus sem suscipit vitae. Vestibulum vitae cursus tellus. 
              Nam consequat ligula est, sed faucibus augue tincidunt in. Sed a bibendum nibh. 
              Maecenas vestibulum felis quis gravida vestibulum. Vivamus vel nibh eu sem lobortis suscipit at eget purus. 
              Integer pulvinar sem ut odio suscipit, nec dignissim velit suscipit. 
              Ut malesuada eros in neque vestibulum, scelerisque dictum lacus fermentum. 
              Donec rutrum tincidunt orci eget fermentum.
            </p>

            <p> 
              Nam ut odio vulputate, aliquam velit suscipit, feugiat lorem. 
              Suspendisse faucibus, sem id ultricies imperdiet, nibh ante vehicula neque, eget scelerisque urna libero nec lacus. 
              Curabitur ultrices metus et erat vulputate mollis. Nullam nec interdum diam. 
              Sed ullamcorper tempor nulla vitae iaculis. 
              Quisque tempus, diam id commodo tincidunt, enim ligula pellentesque elit, tristique sagittis dolor libero non leo. 
              Pellentesque cursus elementum semper. In a augue interdum, lacinia sem sit amet, luctus lorem.
            </p>
            </div>
        </div>


      </main>
      
    </Layout>
    
  )
}

export default Nosotros
