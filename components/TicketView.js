import useSWR from 'swr';

/*
  This will display information about each ticket when selected from the table
*/

export default function TicketView(props) {

  const id = props.id;
  // Take api link and add id from props id
  const api = 'http://localhost:4000/tickets/' + id;

  // console.log(api);

  // Fetch tickets
  const fetcher = (url) => fetch(url).then((res) => res.json())

  const { data, error } = useSWR(api, fetcher)

  if (error) return <div>Failed to load</div>
  if (!data) return <div>Loading...</div>

  // console.log(data)

  return (
    <div>
      <h3>{data.ticket_title}</h3>
      <p>{data.ticket_description}</p>      
    </div>
  )
}
