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
      ticket: []
    }
  }

  componentDidMount() {
    axios.get('http://localhost:4000/tickets/' + this.props.id)
    .then(response => {
      // console.log(response)
      this.setState({ ticket: response })
    })
    .catch(error => {
      console.log(error)
    })
  }


  render() {
    console.log(this.state.ticket)
    
    return (
      <div>
      
      </div>
    )
  }
}

export default TicketView







/*
export default function TicketView(props){
  // const res = await fetch('https://api.github.com/repos/zeit/next.js')
  // const json = await res.json()
  // return { stars: json.stargazers_count }

  const id = props.id;
  
  // const res = await fetch('http://localhost:4000/tickets/')
  // const json = await res.json()

  // Take api link and add id from props id
  const api = 'http://localhost:4000/tickets/' + id;

  // Fetch tickets
  const fetcher = (url) => fetch(url).then((res) => res.json())

  const { data, error } = useSWR(api, fetcher)
  

  return (
    <div>
      
      <h3>{data.ticket_title}</h3>
      <p>{data.ticket_description}</p>  
   
    </div>
  )
  
  
}

*/