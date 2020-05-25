import Head from 'next/head';
import { UserProvider, useFetchUser } from '../utils/user';

export default function Home() {

  const { user, loading } = useFetchUser();
  console.log(user, loading);

  if(user) {
    return (
      <UserProvider value={{ user, loading }}>

          <p>{user.nickname}</p>

      </UserProvider>
    )
  } else {
    return (
      <p>Please login</p>
    )
  }



    return (
      <div className="container">
        <Head>
          <title>Pumpkin | Home</title>
        </Head>

      </div>
  )



}
