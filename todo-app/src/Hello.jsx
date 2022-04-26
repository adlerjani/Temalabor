/* import React from "react"


import { useState } from "react"
import callEndpoint from "./utils/callEndpoint"

const Hello = () => {

    const [message, setMessage] = useState("")

    const handleClick = () =>{
        console.log("Pina")
        const axiosRequestConfig = {
            url: "https://localhost:7195/world",
            method: "GET",
            headers:{
                "Access-Control-Allow-Origin": "enable",
            }
        }

        callEndpoint<String>(axiosRequestConfig).then((response) =>{
            console.log(response)
            setMessage(response.data)
        })
    }

    return(
        <>
            <button onClick={handleClick}>Click Me</button>
        </>
    )
}

export default Hello */

import React from 'react';
import axios from 'axios';

export default class PersonList extends React.Component {
  state = {
    persons: []
  }
  //headers: {"Access-Control-Allow-Origin": "*"} 

  componentDidMount() {
    axios.get(`https://localhost:7195/world`,{headers:{"Access-Control-Allow-Origin": "*"}})
      .then(res => {
        const persons = res.data;
        console.log(res.data)
        this.setState({ persons });
      })
  }

  render() {
    return (
        <p>{this.state.persons}</p>
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