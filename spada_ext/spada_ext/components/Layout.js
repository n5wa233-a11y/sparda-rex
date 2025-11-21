import Head from 'next/head'
import Header from './Header'
import Footer from './Footer'

export default function Layout({children, title='Spada'}) {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <div className="container">
        <Header />
        <main>{children}</main>
        <Footer />
      </div>
    </>
  )
}
