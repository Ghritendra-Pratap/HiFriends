import Head from 'next/head'
import Image from 'next/image'
import Chat from './Chat'

export default function Home() {
  return (
    <div >
      <Head>
        <title>Whatsapp Clone</title>
        
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Chat/>
      </main>
      
    </div>
  )
}
