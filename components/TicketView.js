import React, { Component } from 'react';
import axios from 'axios';
// import { GetServerSideProps } from 'next';

/*
  This will display information about each ticket when selected from the table
*/

class TicketView extends Component {
  constructor() {
    super(); 
    this.state = {
      ticketTitle: '',
      ticketDescription: '',
      ticketOwner: '',
      ticketCreator: '',
      ticketStatus: '',
      ticketDate: ''
    }
  }


  // When component mounts get ticket information with ID that is passed through props.id
  // Update each item in state with item from json
  // This is setting up the ability to post updated data, and change state for each item when 
  // editing them
  componentDidMount() {

    let apiCall = 'http://localhost:4000/tickets/' + this.props.id;

    axios.get(apiCall)
    .then(response => {

      // Set state of each item
      let ticketResponse = { ...this.state };
      ticketResponse.ticketTitle = response.data.ticket_title;
      ticketResponse.ticketDescription = response.data.ticket_description;
      ticketResponse.ticketOwner = response.data.ticket_owner;
      ticketResponse.ticketCreator = response.data.ticket_creator;
      ticketResponse.ticketStatus = response.data.ticket_status;
      // console.log(ticketResponse)
      this.setState({ ...ticketResponse })
    })
    .catch(error => {
      console.log(error)
    })
  }


  render() {
    // console.log(this.state.ticket)

    return (
      <div>
        <hr />
        <h2>{this.state.ticketTitle}</h2>
        <p>{this.state.ticketDescription}</p>
        <p>{this.state.ticketOwner}</p>
        <p>{this.state.ticketCreator}</p>
        <p>{this.state.ticketStatus}</p>
      </div>
    )
  }
}

export default TicketView

