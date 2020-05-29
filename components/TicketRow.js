import react, { Component } from 'react'

// CAN BE REMOVED, NO LONGER USING



/*
 * Component for each row in the tickets table
*/
class TicketRow extends Component {
  // const formattedDate = props.date;
  // function handleClick(event) {
  //   alert('Clicked!')
  // }

  // getId(id) {
  //   // this.setState({viewTicket: id})
  //   alert('clicked!')
  // }

  render() {
    return (
      <tr>
        <th>{this.props.title}</th>
        <td>{this.props.description}</td>
        <td>{this.props.assignee}</td>
        <td>{this.props.creator}</td>
        <td>{this.props.date}</td>
        <td>{this.props.status}</td>
      </tr>
    )
  }
  
}


export default TicketRow