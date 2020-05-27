/*
 * Component for each row in the tickets table
*/
export default function TicketRow(props) {
  // const formattedDate = props.date;
  
  return (
    <tr>
      <th>{props.title}</th>
      <td>{props.description}</td>
      <td>{props.assignee}</td>
      <td>{props.creator}</td>
      <td>{props.date}</td>
      <td>{props.status}</td>
    </tr>
  )
}
