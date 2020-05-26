import Head from 'next/head';
import TicketForm from '../components/TicketForm'


export default function Home() {




    return (
      <div className="container">
        <Head>
          <title>Pumpkin | Home</title>
        </Head>

        <TicketForm />

      </div>
  )



}
