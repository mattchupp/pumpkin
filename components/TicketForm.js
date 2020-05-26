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

  onChange() {

  }


  render() {
    return(
      <form onSubmit='submitTicket()'>
        <input id="ticket_title" type="text" placeholder="Ticket Title"/>
        <br/> <br />
        <input id="ticket_creator" type="text" placeholder="Email"/>
        <br/> <br />
        <textarea id="ticket_description" row="80" col="40" placeholder="Ticket Description"></textarea>
        <br/> <br />
        <input type="submit" />
      </form>
    )
  }

}


export default TicketForm
