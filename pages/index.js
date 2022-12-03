import Head from 'next/head'
import Image from 'next/image'

export default function Home() {
  return (
    <div className="h-screen bg-chamber">
      <Head>
        <title>Votion Development</title>
        <meta name="description" content="Home of Votion Development" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div className="grid place-content-center rounded-full pt-10">
          <Image alt="Votion Logo" src="/votion.svg" width={128} height={128} />
        </div>
        <div className="text-white text-4xl font-bold text-center pt-5">
          Votion Development
        </div>
      </main>
      <footer>
        <div className="flex flex-col items-center bg-white max-w-fit px-4 py-3 rounded-md">
          <a
            href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Powered by&nbsp;
            <div className="mt-1">
              <Image alt="Vercel Logo" src="/vercel.svg" width={72} height={16} />
            </div>
          </a>
        </div>
      </footer>
    </div>
  )
}
