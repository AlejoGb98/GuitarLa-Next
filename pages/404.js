import Layout from "@/components/layout"
import Link from "next/link"

const Pagina404 = () => {
  return (
   <Layout
    title="Pagnia no encontrada"
    >

        <p className="error">Pagina no encontrada</p>
        <Link className='error-enlace' href='/'>
            Ir a inicio
        </Link>
   </Layout>
  )
}

export default Pagina404
