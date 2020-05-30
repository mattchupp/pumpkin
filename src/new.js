import Head from 'next/head';
import TicketForm from '../components/TicketForm'


export default function NewTicket() {


    return (
      <div>
        <div className="container">
          <Head>
            <title>Pumpkin | New Ticket</title>
            <link
              rel="stylesheet"
              href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css"
              integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk"
              crossOrigin="anonymous"
            />
          </Head>

          <br />

          <TicketForm />

        </div>
      </div>
  )



}
