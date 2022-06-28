import { makeAutoObservable } from 'mobx';

class Todo {
    todos = []
    accessToGet = true
    constructor() {
        makeAutoObservable(this)
    }

    addTodo() {
        this.todos.unshift({id: Math.floor(Date.now() * Math.random())})
    }
    setTodo(data) {
        this.todos.unshift(...data)
    }
    setAccessToGet (access) {
        this.accessToGet = access
    }
    removeTodo(id) {
        this.todos = this.todos.filter(todo => todo.id !== id)
    }
    clearTodo() {
        this.setAccessToGet(true)
        this.todos = []
    }
    async fetchTodos() {
        await fetch('https://jsonplaceholder.typicode.com/todos')
          .then(response => response.json())
          .then(data => {
              this.setAccessToGet(false)
              this.setTodo(data);
          })
    }
    removeSelectedTodo(list) {
        this.todos = this.todos.filter(todo => !list.find(listItem => todo.id === listItem))
    }
}

export default new Todo()
