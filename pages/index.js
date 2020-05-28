import Head from 'next/head';
import Link from 'next/link';


export default function Home() {


    return (
      <div>
        <div className="container">
          <Head>
            <title>Pumpkin | Home</title>
            <link
              rel="stylesheet"
              href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css"
              integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk"
              crossOrigin="anonymous"
            />
          </Head>
          
          <p className="text-center mt-3">Please <Link href="/api/login"><a>Sign In</a></Link></p>

        </div>
      </div>
  )



}
