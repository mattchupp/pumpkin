import { Component } from 'react';
import Head from 'next/head';


class TicketForm extends Component {





  render() {
    return(
      <form>
        <input id="ticket_title" type="text" placeholder="Ticket Title"/>
        <br/> <br />
        <textarea id="ticket_description" row="80" col="40" placeholder="Ticket Description"></textarea>
        <br/> <br />
        <input type="submit" />
      </form>
    )
  }

}


export default TicketForm
