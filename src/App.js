import React, { Component } from "react"
import axios from "axios"

import logo from "./logo.svg"
import "./App.css"

const port = 9000;
const baseUrl = `http://${window.location.hostname}:${port}`;

class LambdaDemo extends Component {
  constructor(props) {
    super(props)
    this.state = { loading: false, msg: null }
  }

  handleClick = endpoint => e => {
    e.preventDefault()

    this.setState({ loading: true })
    axios.get(`${baseUrl}/.netlify/functions/${endpoint}`)
      .then(({ data }) => this.setState({ loading: false, msg: data.msg }))
  }

  render() {
    const { loading, msg } = this.state

    return (
      <p>
        <button onClick={this.handleClick("hello")}>{loading ? "Loading..." : "Call Lambda"}</button>
        <button onClick={this.handleClick("list")}>{loading ? "Loading..." : "Call Async Lambda"}</button>
        <br />
        <span>{msg}</span>
      </p>
    )
  }
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <LambdaDemo />
        </header>
      </div>
    )
  }
}

export default App
