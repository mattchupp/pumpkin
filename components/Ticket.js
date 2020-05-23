export default function Ticket(props) {
  return(
    <div>
      <h2>{props.title}</h2>
      <p>{props.description}</p>
      <p>{props.creator}</p>
    </div>
  )
}
