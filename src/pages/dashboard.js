// import Head from 'next/head';
import TicketsTable from '../components/TicketsTable.js';
// import { UserProvider, useFetchUser } from '../utils/user';
import NavBar from '../components/NavBar.js';
import React from 'react';
// import { useAuth0 } from "../react-auth0-spa";
// import Link from 'next/link'


export default function Dashboard () {

 


  /*
  * If user is signed in, pull from tickets api and return tickets
  * Else, show nothing and require that the user signs in
  */
  // if(user) {

    return (
      <div>

        <NavBar user="Matt"/>

        <div className="container-fluid">
          <TicketsTable />

        </div>

      </div>
    )
  // } else {
  //   return (
  //     <>
  //     <Head>
  //         <title>Pumpkin | Dashboard</title>
  //         <link
  //           rel="stylesheet"
  //           href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css"
  //           integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk"
  //           crossorigin="anonymous"
  //         />  
  //       </Head>
  //     <div className="container">
  //       <p className="text-center mt-3">Please <Link href="/api/login"><a>sign in</a></Link></p>
  //     </div>
  //     </>
  //   )
  // }


}
