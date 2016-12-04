import React, { PropTypes } from 'react'

class TestForm extends React.Component {
  handleSubmit = (e) => {
    e.preventDefault()
    console.log({
      name: this.name.value,
      checked: this.checked.checked
    })
  }

  render () {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          placeholder="hello world"
          ref={input => this.name = input}
        />
        <label>
          <input
            type="checkbox"
            ref={input => this.checked = input}
          />
          Click
        </label>
        <button type="submit">Save</button>
      </form>
    )
  }
}

export default TestForm;
