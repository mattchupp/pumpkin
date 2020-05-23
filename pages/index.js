import Head from 'next/head';
import { Auth0Provider, useAuth } from 'use-auth0-hooks';

export default function Home() {



   // const { isAuthenticated, isLoading, accessToken } = useAuth({
   //   audience: 'https://api/tv-shows',
   //   scope: 'read:shows'
   // });


    return (
      <div className="container">
        <Head>
          <title>Pumpkin | Home</title>
        </Head>

        <Auth0Provider
          domain={'dev-c90k1kp1.auth0.com'}
          clientId={'DXl2G673IMtau4R1yPOHMg2Ya1MbcprN'}
          redirectUri={'http://localhost:3000/dashboard'}>
        </Auth0Provider>


      </div>
  )

}
