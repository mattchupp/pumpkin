// import Head from 'next/head';
import TicketsTable from '../components/TicketsTable.js';
// import { UserProvider, useFetchUser } from '../utils/user';
import NavBar from '../components/NavBar.js';
import React from 'react';
// import { useAuth0 } from "../react-auth0-spa";
// import Link from 'next/link'


export default function Dashboard () {


  return (

    <div>

      <NavBar user="Matt"/>

      <div className="container-fluid">
        <TicketsTable />

      </div>

    </div>
  )


}
