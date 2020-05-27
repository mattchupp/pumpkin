import Head from 'next/head';
import TicketsTable from '../components/TicketsTable.js';
import { UserProvider, useFetchUser } from '../utils/user';
import NavBar from '../components/NavBar.js';


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
      <div>
        <Head>
          <title>Pumpkin | Dashboard</title>
          <link
            rel="stylesheet"
            href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css"
            integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk"
            crossorigin="anonymous"
          />

          <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossOrigin="anonymous"></script>
          <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossOrigin="anonymous"></script>
          <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossOrigin="anonymous"></script>
        </Head>

        <NavBar user={user.name}/>

        <div className="container">
          <TicketsTable />
        </div>

      </div>
    )
  } else {
    return (
      <p>Please sign in</p>
    )
  }


}
