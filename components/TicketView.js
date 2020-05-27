import useSWR from 'swr';

/*
  This will display information about each ticket when selected from the table
*/

export default function TicketView(props) {

  // Fetch tickets
  const fetcher = (url) => fetch(url).then((res) => res.json())

  const { data, error } = useSWR('http://localhost:4000/tickets/5ecdb5a7f703f6027412ce08', fetcher)

  if (error) return <div>Failed to load</div>
  if (!data) return <div>Loading...</div>

  console.log(data)

  // const getTicketById = data.filter((ticket) => {
  //   if(data._id === '5ecdb8e5f703f6027412ce09') {
  //     console.log(data)
  //   }
  // })

  return (
    <div>
  
        {data.ticket_title}
           
    </div>
  )
}
