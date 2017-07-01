import React from 'react'
import ReactDOM from 'react-dom'

import { createStore } from 'redux'
import { Provider } from 'react-redux'

import { calendarApp } from '../reducers'
import TheDifferentCalendar from '../components/TheDifferentCalendar'

let store = createStore(calendarApp)
let container = document.getElementById('container')

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <Provider store={store}>
      <TheDifferentCalendar />
    </Provider>,
    container)
})
