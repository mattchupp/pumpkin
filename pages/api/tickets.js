// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

let tickets = [
{
  id: '1',
  ticket_title: 'Test Ticket',
  ticket_description: 'This is the first test ticket. I am having issues with this',
  ticket_creator: 'Joe Creator',
  ticket_owner: 'Matt C',
  ticket_status: 'Open'
},
{
  id: '2',
  ticket_title: 'Bug Item 1',
  ticket_description: 'Every time I create a new document it crashes',
  ticket_creator: 'Mary Batman',
  ticket_owner: 'Matt C',
  ticket_status: 'Open'
},
{
  id: '3',
  ticket_title: 'Fix this please!',
  ticket_description: 'The app crashes each time I try to submit something',
  ticket_creator: 'Marty Byrd',
  ticket_owner: 'Matt C',
  ticket_status: 'Open'
},
{
  id: '4',
  ticket_title: 'Bug 3',
  ticket_description: 'It\'s not working!',
  ticket_creator: 'Beth Something',
  ticket_owner: 'Matt C',
  ticket_status: 'Open'
}
]


export default (req, res) => {
  res.statusCode = 200
  res.json({tickets})
}
