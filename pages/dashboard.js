import Head from 'next/head';
import useSWR from 'swr';
import Ticket from '../components/Ticket';
import { UserProvider, useFetchUser } from '../utils/user';


export default function Home() {

  /* authenticate user */
  const { user, loading } = useFetchUser();
  console.log(user, loading);


  /* Fetch tickets */
  const fetcher = (url) => fetch(url).then((res) => res.json())

  // const { data, error } = useSWR('/api/tickets', fetcher)
  const { data, error } = useSWR('http://localhost:4000/tickets', fetcher)

  if (error) return <div>Failed to load</div>
  if (!data) return <div>Loading...</div>

  console.log(data)


  /*
  * If user is signed in, pull from tickets api and return tickets
  * Else, show nothing and require that the user signs in
  */
  if(user) {

    return (
      <div className="container">
        <Head>
          <title>Pumpkin | Home</title>
        </Head>
        <p>Signed in as {user.name}</p>

        {data.map((ticket) => (
          <Ticket
            key={ticket._id}
            title={ticket.ticket_title}
            description={ticket.ticket_description}
            creator={ticket.ticket_creator}
            status={ticket.ticket_status}
          />
        ))}
      </div>
    )
  } else {
    return (
      <p>Please sign in</p>
    )
  }


}
