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
      ...this.state,
      [event.target.name]: event.target.value
    })
  }

  handleSubmit(event) {
  
    console.log('Form Updated! ' + this.state.ticketTitle)
    console.log(this.state.ticketCreator)
    console.log(this.state.ticketDescription)
  }


  render() {
    return(
      <form onSubmit={this.handleSubmit()}>
        <input
          name="ticketTitle"
          type="text"
          placeholder="Ticket Title"
          value={this.state.ticketTitle}
          onChange={this.handleChange}
        />
        <br/> <br />
        <input
          name="ticketCreator"
          type="text"
          placeholder="Email"
          value={this.state.ticketCreator}
          onChange={this.handleChange}
        />
        <br/> <br />
        <textarea
          name="ticketDescription"
          row="80"
          col="40"
          placeholder="Ticket Description"
          value={this.state.ticketDescription}
          onChange={this.handleChange}
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
