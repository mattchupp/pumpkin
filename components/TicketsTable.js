/* Show the tickets in a table */

import TicketRow from './TicketRow';
import useSWR from 'swr';

export default function TicketTable(props) {

/*
  const fetcher = (url) => fetch(url).then((res) => res.json())
  const initialData = props.data
  const { data, error } = useSWR('http://localhost:4000/tickets', fetcher, { initialData })
*/


  // Fetch tickets
  const fetcher = (url) => fetch(url).then((res) => res.json())

  // const { data, error } = useSWR('/api/tickets', fetcher)
  const { data, error } = useSWR('http://localhost:4000/tickets', fetcher)

  if (error) return <div>Failed to load</div>
  if (!data) return <div>Loading...</div>

  console.log(data)


  return (
    <table className="table table-striped table-bordered mt-3">
      <thead className="thead-dark">
        <tr>
          <th>Title</th>
          <th>Description</th>
          <th>Assignee</th>
          <th>Creator</th>
          <th>Date Created</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        {data.map((ticket) => (
          <TicketRow
            key={ticket._id}
            title={ticket.ticket_title}
            description={ticket.ticket_description}
            creator={ticket.ticket_creator}
            assignee={ticket.ticket_owner}
            date={ticket.date_created}
            status={ticket.ticket_status}
          />
        ))}
      </tbody>
    </table>
  )
}



/*
export async function getServerSideProps() {
  const data = await fetcher('https://localhost:4000/tickets', fetcher)
  return { props: {data } }
}
*/

/*

{data.map((ticket) => (
  <TicketRow
    key={ticket._id}
    title={ticket.ticket_title}
    description={ticket.ticket_description}
    creator={ticket.ticket_creator}
    assignee={ticket.ticket_owner}
    status={ticket.ticket_status}
  />
))}



*/

/*

export async function getServerSideProps() {
  const data = await fetcher('/api/data')
  return { props: { data } }
}

function App (props) {
  const initialData = props.data
  const { data } = useSWR('/api/data', fetcher, { initialData })

  return <div>{data}</div>
}

*/
