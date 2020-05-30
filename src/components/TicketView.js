import React, { Component } from 'react';
import axios from 'axios';
// import TicketsTable from './TicketsTable';

/*
  This will display information about each ticket when selected from the table
*/

class TicketView extends Component {
  constructor() {
    super(); 
    this.state = {
      ticketId: '',
      ticketTitle: '',
      ticketDescription: '',
      ticketOwner: '',
      ticketCreator: '',
      ticketStatus: '',
      ticketDate: '',
      editing: false,
      submitDisabled: true
    }

    this.handleSubmit = this.handleSubmit.bind(this);
    this.toggleEditing = this.toggleEditing.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  // When info is changed in ticket form and saved
  // send patch request to api to update ticket
  handleSubmit(event) {
    event.preventDefault(); 

    // Because this.state isn't the same schema as the db
    // this creates an object matching the schema to post
    // create this object then pass it to the post request
    let patchData = {
      'ticket_title': this.state.ticketTitle,
      'ticket_creator': this.state.ticketCreator,
      'ticket_description': this.state.ticketDescription,
      'ticket_status': this.state.ticketStatus,
      'ticket_owner': this.state.ticketOwner
    }

    console.log(patchData);

    const apiPatchId = 'http://localhost:4000/tickets/' + this.state.ticketId;
    console.log(apiPatchId)
    // patch object to the /tickets/:id endpoint
    axios.patch(apiPatchId, patchData)
      .then(response => {
        console.log(response)
        this.setState({ editing: false })
        // this.props.fetchTickets();
      })
      .catch(error => {
        console.log(error)
      })
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

  toggleEditing() {
    if(!this.state.editing) {
      this.setState({ editing: true })
    } else {
      this.setState({ editing: false })
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
      ticketResponse.ticketId = response.data._id;
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

    // if this.state.editing is false then display as text
    if(!this.state.editing) {
      return (
        <div>
          <hr />
          <button className="btn btn-primary" onClick={this.toggleEditing}>Edit</button>
          <div className="mb-3"></div>
          <div>
            <h2>{this.state.ticketTitle}</h2>
            <p>Assigned to: {this.state.ticketOwner} | Creator: {this.state.ticketCreator}</p>
          </div>
          
          <p>{this.state.ticketDescription}</p>
          
          
          <p>{this.state.ticketStatus}</p>
        </div>
      )
    } else if (this.state.editing) {
      return (
        <div>
          <hr />
          <button className="btn btn-primary" onClick={this.toggleEditing}>Done Editing</button>
          <form className="card-body" onSubmit={this.handleSubmit}>
            <div className="form-group">
              <label>Title</label>
              <input
                className="form-control"
                name="ticketTitle"
                type="text"
                placeholder="Ticket Title"
                value={this.state.ticketTitle}
                onChange={this.handleChange}
              />
            </div>
            <div className="form-group">
            <label>Creator</label>
              <input
                className="form-control"
                name="ticketCreator"
                type="email"
                placeholder="Email"
                value={this.state.ticketCreator}
                onChange={this.handleChange} 
                required     
              />
            </div>
            <div className="form-group">
            <label>Assignee</label>
              <input
                className="form-control"
                name="ticketOwner"
                type="text"
                placeholder="Assignee"
                value={this.state.ticketOwner}
                onChange={this.handleChange}
                required      
              />
            </div>
            <div className="form-group">
              <label>Status</label>
              <select
                className="form-control"
                name="ticketStatus"
                type="text"
                placeholder="Status"
                value={this.state.ticketStatus}
                onChange={this.handleChange} 
                required     
              >
                <option>Open</option>
                <option>Complete</option>
              </select>
            </div>
            <div className="form-group">
            <label>Description</label>
              <textarea
                className="form-control"
                name="ticketDescription"
                row="80"
                col="40"
                placeholder="Ticket Description"
                value={this.state.ticketDescription}
                onChange={this.handleChange}
                required
              >
              </textarea>
            </div>
            <div className="form-group">
              <input
                className="btn btn-success"
                type="submit"
                value="Save Changes"
              />
            </div>
          </form>
        </div>
      )
    } else {
      return ( <></>)
    }
    
  }
}

export default TicketView

