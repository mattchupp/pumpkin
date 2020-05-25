import Head from 'next/head';
import useSWR from 'swr';
import Ticket from '../components/Ticket';



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
            key={ticket.id}
            title={ticket.ticket_title}
            description={ticket.ticket_description}
            creator={ticket.ticket_creator}
          />
       ))}




    </div>
  )

}
