import React from 'react'
import { connect } from 'react-redux'

const DAYS_OF_WEEK = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']

class CalendarDay extends React.Component {
  render() {
    let slots = []

    let remaining = 24
    this.props.tasks.map((task, i) => {
      slots.push(<div className="wday__slot"
                      key={i * 100}
                      style={{ backgroundColor: task.color, flex: task.duration }}>{task.name}</div>)
      remaining -= task.duration
    })

    if (remaining > 0)
       slots.push(<div className="wday__slot wday__slot--empty"
                       key={100000}
                       style={{ flex: remaining }}
                       data-remaining={Math.ceil(remaining)}>{remaining}h free</div>)

    return (
      <div className="wday">
        <div className="wday__name">{DAYS_OF_WEEK[this.props.index]}:</div>
        <div className="wday__bar">
          {slots}
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  let weekday = ownProps.index
  let tasks = state.tasks.list.filter((task) => task.days.indexOf(weekday) > -1)

  return {
    tasks: tasks
  }
}

const CalendarDayContainer = connect(
  mapStateToProps
)(CalendarDay)

export default CalendarDayContainer
