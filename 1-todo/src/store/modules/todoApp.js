const storage = {
  fetch() {
    return Array.from({ length: localStorage.length }, (_, i) =>
      localStorage.key(i)
    )
  },
}

const state = {
  todos: storage.fetch(),
}

const getters = {
  getTodos(state) {
    return state.todos
  },
}

const mutations = {
  addTodoItem(state, newTodo) {
    localStorage.setItem(newTodo, newTodo)
    state.todos.push(newTodo)
  },
  deleteTodoItem(state, payload) {
    localStorage.removeItem(payload.todo)
    state.todos.splice(payload.idx, 1) // Array.from(event.target.closest('li').parentNode.children ).indexOf(event.target.closest('li'))
  },
  clearTodoItem(state) {
    localStorage.clear()
    state.todos = []
  },
}

export default { state, getters, mutations }
