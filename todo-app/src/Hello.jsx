import React from 'react';
import axios from 'axios';

export default class PersonList extends React.Component {
  state = {
    persons: []
  }
  //headers: {"Access-Control-Allow-Origin": "*"} 

  componentDidMount() {
    axios.get(`http://localhost:5240/api/Columns`,{headers:{"Access-Control-Allow-Origin": "*"}})
      .then(res => {
        const persons = res.data;
        console.log(res.data)
        this.setState({ persons });
      })
  }

  render() {
    return (
        <p>{this.state.persons.map( column =><div key={column.id}>{column.title}</div>)}</p>

      /*{ <ul>
        {
          this.state.persons
            .map(person =>
              <p key={person.id}>{person.name}</p>
            )
        }
      </ul> }*/
    )
  }
}