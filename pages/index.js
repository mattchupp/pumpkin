import Head from 'next/head';
import { useFetchUser } from '../utils/user';

export default function Home() {

  const { user, loading } = useFetchUser();
  console.log(user, loading);



    return (
      <div className="container">
        <Head>
          <title>Pumpkin | Home</title>
        </Head>

  

      </div>
  )

}
