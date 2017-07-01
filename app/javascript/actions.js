const ADD_TASK = 'ADD_TASK'

const COLORS = [
  '#F44336', '#E91E63', '#9C27B0', '#673AB7', '#3F51B5', '#2196F3', '#009688',
  '#FF5722', '#795548', '#607D8B'
]

function addTask(name, duration, days) {
  let color = COLORS[Math.floor(Math.random() * COLORS.length)]

  return {
    type: ADD_TASK,
    payload: {
      name: name,
      duration: duration,
      days: days,
      color: color
    }
  }
}

export { addTask, ADD_TASK }
