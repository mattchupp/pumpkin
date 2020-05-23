import Head from 'next/head'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Pumpkin | Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <ul>
         {tickets.map((ticket) => (
           <li key={ticket.id}>{ticket.ticket_title}</li>
         ))}
       </ul>

    </div>
  )

}



export async function getStaticProps() {
  // Call an external API endpoint to get posts.
  // You can use any data fetching library
  const res = await fetch('http://localhost:4000/api/tickets')
  const tickets = await res.json()

  // By returning { props: posts }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {
      id,
      ticket_title,
    },
  }
}
