import useSWR from 'swr';

/*
  This will display information about each ticket when selected from the table
*/

export default function TicketView(props) {

  // const id = '5ecdb5a7f703f6027412ce08';
  // Take api link and add id from props id
  const api = 'http://localhost:4000/tickets/' + props.id;

  console.log(api);

  // Fetch tickets
  const fetcher = (url) => fetch(url).then((res) => res.json())

  const { data, error } = useSWR(api, fetcher)

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
