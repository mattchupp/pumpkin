import { Component } from 'react';
import Head from 'next/head';


class TicketForm extends Component {
  constructor() {
    super();
    this.state = {
      ticketTitle: '',
      ticketDescription: '',
      ticketCreator: ''
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

   submitTicket = (data) => {
    fetch('http://localhost:4000/tickets', {
      method: 'post',
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    }).then((res) => {
      res.status === 200
    })
  }

  handleChange(event) {
    this.setState({
      ticketTitle: event.target.ticketTitle,
      ticketCreator: event.target.ticketCreator
    })
  }

  handleSubmit(event) {
    // this.submitTicket()
    console.log('Form Submitted! ' + this.state.ticketTitle + ' ' + this.state.ticketDescription)
  }


  render() {
    return(
      <form onSubmit={this.handleSubmit()}>
        <input
          name="ticket_title"
          type="text"
          placeholder="Ticket Title"
          value={this.state.ticketTitle}
          onChange={this.handleChange}
        />
        <br/> <br />
        <input
          name="ticket_creator"
          type="text"
          placeholder="Email"
          value={this.state.ticketCreator}
        />
        <br/> <br />
        <textarea
          name="ticket_description"
          row="80"
          col="40"
          placeholder="Ticket Description"
          value={this.state.ticketDescription}
        >
        </textarea>
        <br/> <br />
        <input
          type="submit"
          value="Submit"
        />
      </form>
    )
  }

}


export default TicketForm
