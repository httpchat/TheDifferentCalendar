import { combineReducers } from 'redux'

import { ADD_TASK } from './actions'

function tasksReducer(state = { list: [] }, action) {
  switch (action.type) {
    case ADD_TASK:
      console.log(state, action.payload)
      return {
        list: [
          ...state.list,
          action.payload
        ]
      }
    default:
      return state
  }
}

const calendarApp = combineReducers({
  tasks: tasksReducer
})

export { calendarApp }
