import Head from 'next/head'
import useSWR from 'swr'
import Ticket from '../components/Ticket'

export default function Home() {

  const fetcher = (url) => fetch(url).then((res) => res.json())

  const { data, error } = useSWR('/api/tickets', fetcher)

   if (error) return <div>Failed to load</div>
   if (!data) return <div>Loading...</div>

   console.log(data)

  return (
    <div className="container">
      <Head>
        <title>Pumpkin | Home</title>
      </Head>


       {data.tickets.map((ticket) => (
          <Ticket
            title={ticket.ticket_title}
            description={ticket.ticket_description}
            creator={ticket.ticket_creator}
          />
       ))}


    </div>
  )

}


/*

<ul>
   {data.map((ticket) => (
     <li key={ticket.id}>{ticket.ticket_title}</li>
   ))}
 </ul>


*/

/*

export async function getStaticProps() {
  // Call an external API endpoint to get posts.
  // You can use any data fetching library
  const res = await fetch('http://localhost:3000/api/tickets')
  const tickets = await res.json()

  // By returning { props: posts }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    tickets: {
      id,
      ticket_title,
    },
  }
}

*/
