/* Show the tickets in a table */

// import TicketRow from './TicketRow';
import TicketView from '../components/TicketView';

// import useSWR from 'swr';
import axios from 'axios';
import React, { Component } from 'react';


/* TODO
 [x] Change this from functional to class component
 [x] Change from swr to axios and get json when component mounts
 [x] Allow each row to be selected and pass the id to ticketview
 [x] Filtering buttons 
*/

class TicketsTable extends Component {

  constructor() {
    super();
    this.state = {
      ticketsTable: [],
      viewTicket: '',
      filterBy: 'Open'
      // key: 0
    }

    this.handleClick = this.handleClick.bind(this);
    this.filterByOpen = this.filterByOpen.bind(this);
    this.filterByComplete = this.filterByComplete.bind(this);
    this.reloadTable = this.reloadTable.bind(this);
    this.getId = this.getId.bind(this);
  }

  // method for fetching tickets
  fetchTickets() {
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

  componentDidMount() {
    this.fetchTickets();  
  }

  handleClick() {
    console.log('Hello, you clicked!')
  }

  filterByOpen() {
    this.setState({ filterBy: 'Open'});
    // console.log('pressed')
  }

  filterByComplete() {
    this.setState({ filterBy: 'Complete'});
  }

  reloadTable() {
    this.fetchTickets()
  }

  // Get the id of the row clicked and update the state
  // the state is passed to the id prop in <TicketView />
  // The key needs to be set there too because components 
  // remount when a key is changed
  getId(id) {
    // console.log('id selected ' + id)
    this.setState({viewTicket: id})
    // console.log('new state ' + this.state.viewTicket)
  }

  render() {
    let ticketsTable = this.state.ticketsTable;
    // console.log(ticketsTable)

    let filteredTickets = ticketsTable.filter((ticket) => {
      return ticket.ticket_status.indexOf(this.state.filterBy) !== -1;
    })

    // const fetchTickets = this.fetchTickets(); 

    // const ticketToView = <TicketView id={this.state.viewTicket} />;

    return (
      <div> {/* key={this.state.key}> */}
        <div className="mt-3"></div>
        <button className="btn btn-info mr-3" onClick={this.filterByOpen}>Open</button>
        <button className="btn btn-info mr-3" onClick={this.filterByComplete}>Complete</button>
        <button className="btn btn-success" onClick={this.reloadTable}>Refresh</button>
        <table className="table table-striped table-bordered mt-3">
          <thead className="thead-dark">
            <tr>
              <th>Title</th>
              <th>Description</th>
              <th>Assignee</th>
              <th>Creator</th>
              {/* <th>Date Created</th> */}
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {filteredTickets.map((ticket) => (
              <tr key={ticket._id}>
                <th><a href="#" onClick={() => this.getId(ticket._id)}>{ticket.ticket_title}</a></th>
                <td>{ticket.ticket_description}</td>
                <td>{ticket.ticket_owner}</td>
                <td>{ticket.ticket_creator}</td>
                {/* <td>{ticket.date_created}</td> */}
                <td>{ticket.ticket_status}</td>
              </tr>
            ))}
          </tbody>
        </table>
              
        <TicketView key={this.state.viewTicket} id={this.state.viewTicket} />
        
      </div>
    )
  }
}


export default TicketsTable

