// ./src/R_AxiosGet.js
import React, { Component } from 'react';
import axios from "axios";

class R_AxiosGet extends Component {
  componentDidMount(){
    axios.get('http://date.jsontest.com/')
    .then( response => {alert(response.data.date)})
  }

  render() {
    return (
        <h1>axios get</h1>
    )
  }
}

export default R_AxiosGet;
