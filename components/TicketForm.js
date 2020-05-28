import { react, Component } from 'react';
import Head from 'next/head';
// import useSWR, { mutate } from 'swr';
import axios from 'axios';


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

  /*
    When each input on the form is changed call this function and update the state
    with what is being entered
  */
  handleChange(event) {

    // gets state then sets each names value to the value in the form
    this.setState({
      ...this.state,
      [event.target.name]: event.target.value
    })
  }

  handleSubmit(event) {
    event.preventDefault();

    // Because this.state isn't the same schema as the db
    // this creates an object matching the schema to post
    // create this object then pass it to the post request
    let postData = {
      'ticket_title': this.state.ticketTitle,
      'ticket_creator': this.state.ticketCreator,
      'ticket_description': this.state.ticketDescription
    }

    // console.log(postData);

    // post object to the /tickets endpoint
    axios.post('http://localhost:4000/tickets', postData)
      .then(response => {
        console.log(response)
      })
      .catch(error => {
        console.log(error)
      })

  }


  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="form-group">
          <input
            name="ticketTitle"
            type="text"
            placeholder="Ticket Title"
            value={this.state.ticketTitle}
            onChange={this.handleChange}
            required
          />
          <br/> <br />
          <input
            name="ticketCreator"
            type="text"
            placeholder="Email"
            value={this.state.ticketCreator}
            onChange={this.handleChange}
            required
          />
          <br/> <br />
          <textarea
            name="ticketDescription"
            row="80"
            col="40"
            placeholder="Ticket Description"
            value={this.state.ticketDescription}
            onChange={this.handleChange}
            required
          >
          </textarea>
          <br/> <br />
          <input
            type="submit"
            value="Submit"
          />
        </div>
      </form>
    )
  }

}



export default TicketForm
