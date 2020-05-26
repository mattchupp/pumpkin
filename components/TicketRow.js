export default function TicketRowd(props) {
  return(
    <tr>
      <th>{props.title}</th>
      <td>{props.description}</td>
      <td>{props.creator}</td>
      <td>{props.status}</td>
    </tr>
  )
}
