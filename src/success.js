import React from 'react';
import { Link } from 'react-router-dom';


export default function NewTicket() {

  return (
    <div>
      <div className="container">
        
        <br />

        <p>Success! You submitted a ticket.</p>
        <Link to="/new-ticket">Create another ticket</Link>
        
      </div>
    </div>

  )



}
