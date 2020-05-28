/* Show the tickets in a table */

import TicketRow from './TicketRow';
import TicketView from '../components/TicketView';
// import useSWR from 'swr';
import axios from 'axios';
import React, { Component } from 'react';


/* TODO
 [x] Change this from functional to class component
 [x] Change from swr to axios and get json when component mounts
 [ ] Allow each row to be selected and pass the id to ticketview
 [ ] Filtering buttons 
*/

class TicketsTable extends Component {

  constructor() {
    super();
    this.state = {
      ticketsTable: [],
      viewTicket: '5ecdb5a7f703f6027412ce08',
      filterBy: 'Open'
    }

    this.handleClick = this.handleClick.bind(this);
    this.filterByOpen = this.filterByOpen.bind(this);
    this.filterByComplete = this.filterByComplete.bind(this);
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

  filterByOpen(event) {
    this.setState({ filterBy: 'Open'});
    // console.log('pressed')
  }

  filterByComplete(event) {
    this.setState({ filterBy: 'Complete'});
  }

  render() {
    let ticketsTable = this.state.ticketsTable;
    // console.log(ticketsTable)

    let filteredTickets = ticketsTable.filter((ticket) => {
      return ticket.ticket_status.indexOf(this.state.filterBy) !== -1;
    })

    return (
      <div>
        <button onClick={this.filterByOpen}>Open</button>
        <button onClick={this.filterByComplete}>Complete</button>
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

        <TicketView id={this.state.viewTicket}/>
      </div>
    )
  }
}


export default TicketsTable

