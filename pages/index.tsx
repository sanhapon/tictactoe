import Head from 'next/head'
import { Inter } from 'next/font/google'
import Board from '@/components/Board'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Tic Tac Toe</title>
        <meta name="description" content="Tic Tac Toe" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
          <Board />
      </main>
    </>
  )
}
