import React from 'react'
import { connect } from 'react-redux'

import { addTask } from '../actions'

class NewTask extends React.Component {
  submit(e) {
    e.preventDefault()
    if (!this.name.value.trim() || !this.duration.value) {
      return
    }

    let duration = parseFloat(this.duration.value);
    if (isNaN(duration) || duration < 1 || duration > 24)
      return

    let checkboxes = [...this.form.querySelectorAll('input[type="checkbox"]')]
    let days = checkboxes.map((checkbox, i) => checkbox.checked ? i : undefined)
                         .filter((item) => item !== undefined)

    if (days.length < 1)
      return

    this.props.onNewItem(this.name.value, duration, days)

    this.name.value = ''
    this.duration.value = '1'
    checkboxes.map((checkbox) => { checkbox.checked = false })
  }

  render() {
    return (
      <form onSubmit={this.submit.bind(this)} ref={node => { this.form = node }}>
        <input ref={node => { this.name = node }} />
        <input ref={node => { this.duration = node }} />

        <input type="checkbox" name="0" value="1" />
        <input type="checkbox" name="1" value="1" />
        <input type="checkbox" name="2" value="1" />
        <input type="checkbox" name="3" value="1" />
        <input type="checkbox" name="4" value="1" />
        <input type="checkbox" name="5" value="1" />
        <input type="checkbox" name="6" value="1" />

        <button type="submit">
          Add Task
        </button>
      </form>
     )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onNewItem: (name, hours, days) => {
      dispatch(addTask(name, hours, days))
    }
  }
}

const NewTaskContainer = connect(
  undefined,
  mapDispatchToProps
)(NewTask)

export default NewTaskContainer
