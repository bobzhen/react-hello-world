import React, { PropTypes } from 'react'

class TestForm extends React.Component {
  state = {
    name: "",
    checked: false
  }

  handleSubmit = (e) => {
    e.preventDefault()
    console.log(this.state)
  }

  changeValue = (e) => {
    this.setState({[e.target.name]: e.target.value})
  }
  
  // changeNameValue = (e) => {
  //   this.setState({ name: e.target.value })
  // }
  //
  // changePositionValue = (e) => {
  //   this.setState({ position: e.target.value })
  // }

  changeCheckedValue = (e) => {
    this.setState({ checked: e.target.checked })
  }

  render () {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          placeholder="hello world"
          value={this.state.name}
          name="name"
          onChange={this.changeValue}
        />

        <input
          placeholder="your position"
          value={this.state.position}
          name="position"
          onChange={this.changeValue}
        />

        <label>
          <input
            type="checkbox"
            checked={this.state.checked}
            onChange={this.changeCheckedValue}
          />
          Click
        </label>
        <button type="submit">Save</button>
      </form>
    )
  }
}

export default TestForm;
