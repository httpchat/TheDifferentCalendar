import React from 'react'

import CalendarDay from './CalendarDay'
import NewTask from './NewTask'

export default class TheDifferentCalendar extends React.Component {
  render() {
    let days = []

    for (let i = 0; i < 7; i++)
      days.push(<CalendarDay index={i} key={i} />)

    return (
      <div>
        {days}
        <NewTask />
      </div>
    )
  }
}
