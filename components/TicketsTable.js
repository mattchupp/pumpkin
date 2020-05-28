/* Show the tickets in a table */

import TicketRow from './TicketRow';
import TicketView from '../components/TicketView';
import useSWR from 'swr';
import axios from 'axios';
import React, { Component } from 'react';


/* TODO
 [x] Change this from functional to class component
 [x] Change from swr to axios and get json when component mounts
 [ ] Allow each row to be selected and pass the id to ticketview
*/

class TicketsTable extends Component {

  constructor() {
    super();
    this.state = {
      ticketsTable: [],
      viewTicket: ''
    }

    this.handleClick = this.handleClick.bind(this);
  }


  componentDidMount() {

    axios.get('http://localhost:4000/tickets')
    .then(response => {
      // console.log(response)
      this.setState({ ticketsTable: response.data })
      // console.log(this.state.ticketsTable)
    })  
    .catch(error => {
      console.log(error)
    })
    
  }

  handleClick(event) {
    alert('Hello, you clicked!')
  }

  render() {
    let ticketsTable = this.state.ticketsTable
    // console.log(ticketsTable)

    let filteredTickets = ticketsTable.filter((ticket) => {
      return ticket.ticket_status.indexOf('Open') !== -1;
    })

    return (
      <div>
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
            {filteredTickets.map((ticket) => (
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

        <TicketView id="5ecdb5a7f703f6027412ce08"/>
      </div>
    )
  }
}


export default TicketsTable













/* 
export default function TicketTable(props) {


  // const fetcher = (url) => fetch(url).then((res) => res.json())
  // const initialData = props.data
  // const { data, error } = useSWR('http://localhost:4000/tickets', fetcher, { initialData })


  // Fetch tickets
  const fetcher = (url) => fetch(url).then((res) => res.json())

  // const { data, error } = useSWR('/api/tickets', fetcher)
  const { data, error } = useSWR('http://localhost:4000/tickets', fetcher)

  if (error) return <div>Failed to load</div>
  if (!data) return <div>Loading...</div>

  // console.log(data)

  // Filtering out completed tickets 
  let filteredTickets = data.filter((ticket) => {
    return ticket.ticket_status.indexOf('Open') !== -1;
  })

  // console.log(filteredTickets)

  return (
    <div>
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
        
          {filteredTickets.map((ticket) => (
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

      <TicketView id="5ecdb5a7f703f6027412ce08"/>
    </div>
  )
}

*/
