import Head from 'next/head';
import TicketsTable from '../components/TicketsTable.js'
import { UserProvider, useFetchUser } from '../utils/user';


export default function Dashboard() {

  /* authenticate user */
  const { user, loading } = useFetchUser();
  console.log(user, loading);


  /*
  * If user is signed in, pull from tickets api and return tickets
  * Else, show nothing and require that the user signs in
  */
  if(user) {

    return (
      <div className="container">
        <Head>
          <title>Pumpkin | Dashboard</title>
          <link
            rel="stylesheet"
            href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css"
            integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk"
            crossorigin="anonymous"
          />
        </Head>
        <p>Signed in as {user.name}</p>

        <TicketsTable />

      </div>
    )
  } else {
    return (
      <p>Please sign in</p>
    )
  }


}
